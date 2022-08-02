import React from 'react';
import { useQuery } from '@apollo/client';
import Loader from '../shared/Loader';
import { Card, Grid , CardMedia, Avatar, Typography, CardHeader, CardContent, CardActions, Divider, Button} from '@mui/material';
import { GET_AUTHORS_ALL } from '../../graphql/queries';
import { Link } from 'react-router-dom';

const AuthorsAll = () => {
    const {loading , data , errors} = useQuery(GET_AUTHORS_ALL);
    if (loading) return  <Loader />
    if (errors) return <h3>Errors...</h3>
    console.log(data)
    return (
       <Grid container spacing={5} p={8}>
        {data.authors.map((author)=>(
            <Grid item xs={12} sm={6} md={4} key={author.id} >
                <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4}} >
                
                <CardMedia
                    component="img"
                    height="250"
                    image={author.avatar.url}
                    alt={author.slug}
                />
                <CardContent>
                <Typography component="p" variant="p" color="text.primary"  >
                         {author.name}
                        </Typography>
                        <Typography
                           component="h3"
                           variant="h6"
                           color="text.secondary"
                           fontWeight={600}
                           fontSize={15}
                           mt={2}
                        >
                        {author.field}
                    </Typography>
                </CardContent>
                <Divider variant="middle" sx={{margin:"10px"}} />
                <CardActions>
                <Link to={`/authors/${author.slug}`} style={{width:"100%" ,textDecoration:"none"}}>
                <Button
                variant="outlined"
                size="small"
                sx={{width:"100%" , borderRadius:3 }}
                >
                بیوگرافی نویسنده
                </Button>
                </Link>
              
            </CardActions>
                </Card>
            </Grid>
        ))}
       </Grid>
    );
};

export default AuthorsAll;