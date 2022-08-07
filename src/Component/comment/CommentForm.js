import React,{useState , useEffect} from 'react';
import { Grid, TextField, Typography , Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../../graphql/mutation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate';
//rtl
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//rtl
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
const rtlTheme = createTheme({ direction: "rtl" });


const CommentForm = ({slug}) => {
    const [input , setInput] = useState({
        name:"" ,
        email:"" ,
        text:"",
    });
    const [pressed , setPressed] =useState(false);
    const [sendComment ,{loading , data }]= useMutation(SEND_COMMENT,{
        variables:{name : input.name , email : input.email , text :input.text, slug},
    });
    const [error , setError ]=useState({});
    const [touched , setTouched ]=useState({});
    useEffect(()=>{
        setError(validate(input))
    },[input , touched]);


    const changeHandler = event=> {
        setInput({...input,[event.target.name] : event.target.value} )
    }
    const focusHandler= event => {
        setTouched({...touched , [event.target.name]:true})
    }
    const sendHandler= ()=>{
        if(input.name && input.email && input.text){
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
        <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={rtlTheme}>
          <CssBaseline />
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
                value={input.name}
                onChange={changeHandler}
                onFocus={focusHandler}
                error={error.name && touched.name}
                helperText={error.name && touched.name && error.name}
                 />
              
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                label="ایمیل"
                variant='outlined'
                sx={{width:"100%"}}
                name="email"
                value={input.email}
                onChange={changeHandler}
                onFocus={focusHandler}
                error={error.email && touched.email}
                helperText={error.email && touched.email && error.email}
                 />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                label="متن کامنت"
                variant='outlined'
                sx={{width:"100%"}}
                name ="text"
                value={input.text}
                onChange={changeHandler}
                multiline
                minRows={4}
                onFocus={focusHandler}
                error={error.text && touched.text }
                helperText={error.text && touched.text && error.text}
                 />
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
       </ThemeProvider>
       </CacheProvider>
    );
};

export default CommentForm;