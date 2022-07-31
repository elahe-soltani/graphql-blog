import React from 'react';
import { AppBar , Container, Toolbar , Typography } from '@mui/material';
import {Link} from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Header = () => {
    return (
        <div>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Toolbar sx={{display:"flex" , alignItems:"center"}}>
                    <AutoStoriesIcon />
                    <Box component="div">
                        <Typography component="h1" variant="h5" fontWeight="bold" mr={1}>
                            <Link to="/" style={{textDecoration:"none" , color:"#FFFF"}}>
                             وبلاگ بوتو استارت
                            </Link>
                        </Typography>
                  </Box>
                        <Link to="/" style={{color:"#FFFF"}}>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;