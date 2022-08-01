import React from 'react';
import { AppBar , Container, Toolbar , Typography , Box } from '@mui/material';
import {Link} from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Header = () => {
    return (
        <div>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Toolbar sx={{ display:"flex" , alignItems:"center" , justifyContent:"space-between"}}>
                    <Box component="div"  display="flex" alignItems="center">
                        <AutoStoriesIcon />
                        <Typography component="h1" variant="h5" fontWeight="bold" mr={1}>
                            <Link to="/" style={{textDecoration:"none" , color:"#FFFF"}}>
                             وبلاگ بوتو استارت
                            </Link>
                        </Typography>
                    </Box>
                    <Box component="div"  display="flex" alignItems="center" >
                    <Typography component="p" variant="h5" fontSize={18} fontWeight={700}>
                            <Link to="/authorsAll" style={{textDecoration:"none" , color:"#FFFF"}}>
                               نویسنده ها
                            </Link>
                        </Typography>
                        <Typography component="p" variant="h5" fontSize={18}  fontWeight={700} mr={5}>
                            <Link to="/blogsAll" style={{textDecoration:"none" , color:"#FFFF"}}>
                               وبلاگ ها
                            </Link>
                        </Typography>
                    </Box>
                    
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;