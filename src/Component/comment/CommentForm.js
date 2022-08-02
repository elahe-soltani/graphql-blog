import React,{useState , useEffect} from 'react';
import { Grid, TextField, Typography , Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../../graphql/mutation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate';

const CommentForm = ({slug}) => {
    const [dinput , setDinput] = useState({
        name:"" ,
        email:"" ,
        text:"",
    });
    const [pressed , setPressed] =useState(false);
    const [sendComment ,{loading , data }]= useMutation(SEND_COMMENT,{
        variables:{name : dinput.name , email : dinput.email , text :dinput.text, slug},
    });
    const [error , setError ]=useState({});
    const [touched , setTouched ]=useState({});
    useEffect(()=>{
        setError(validate(dinput))
        console.log(error)
    },[dinput , touched]);


    const changeHandler = event=> {
        setDinput({...dinput,[event.target.name] : event.target.value} )
    }
    const focusHandler= event => {
        setTouched({...touched , [event.target.name]:true})
    }
    const sendHandler= ()=>{
        if(dinput.name && dinput.email && dinput.text){
            sendComment();
            setPressed(true);
        }else {
            toast.warn("تمام فیلد ها را پر کنید!" ,{
                position : "top-center"
            }
            )
        } 
    }
    if(data && pressed){
        toast.success("کامنت ارسال شد و منتظر تایید می باشد!",{
            position : "top-center" ,
        });
        setPressed(false);
    }
    
    return (
       <Grid container 
        sx={{
            boxShadow :"rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius: 4,
            py:1 ,
            mt: 5 ,
       }}>
        <Grid item xs={12} m={2}>
            <Typography component="p" variant="h6" fontWeight={700} color="primary">
                فرم ارسال کامنت
            </Typography>
        </Grid>
        <Grid item xs={12} m={2}>
                <TextField
                label="نام"
                variant='outlined'
                sx={{width:"100%"}}
                name="name"
                value={dinput.name}
                onChange={changeHandler}
                onFocus={focusHandler}
                 />
                {error.name && touched.name &&  <span> {error.name}</span>}
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                label="ایمیل"
                variant='outlined'
                sx={{width:"100%"}}
                name="email"
                value={dinput.email}
                onChange={changeHandler}
                onFocus={focusHandler}
                 />
                 {error.email && touched.email && <span> {error.email}</span>}
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                label="متن کامنت"
                variant='outlined'
                sx={{width:"100%"}}
                name ="text"
                value={dinput.text}
                onChange={changeHandler}
                multiline
                minRows={4}
                onFocus={focusHandler}
                 />
                 {error.text && touched.text && <span> {error.text}</span>}
            </Grid>
            <Grid item xs={12} m={2}>
               {loading? (
                <Button variant="contained" disabled>در حال ارسال ...</Button>
               ):(
                <Button variant="contained" onClick={sendHandler}>ارسال</Button>
                )}
            </Grid>
            <ToastContainer />
       </Grid>
    );
};

export default CommentForm;