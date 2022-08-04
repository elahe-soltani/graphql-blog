import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@mui/material';
import { GET_BLOGS_INFO } from '../../graphql/queries';
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';
const BlogsAll = () => {
    const {loading, data ,errors}=useQuery(GET_BLOGS_INFO);
    if (loading) return  <Loader />
    if (errors) return <h3>Errors...</h3>
    return(
       <Grid container spacing={5} px={5}>
         <Grid item xs={12} mt={0} >
         <Typography component="h3" variant="h4" fontWeight={700}>وبلاگ ها</Typography>
         </Grid>
        {data.posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
               <CardEL {...post} />
            </Grid> ) )}
       </Grid>
    );
};

export default BlogsAll;