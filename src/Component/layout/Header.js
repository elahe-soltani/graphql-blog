import React from 'react';
import { AppBar , Container, Toolbar , Typography , Box } from '@mui/material';
import {Link} from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div>
            <AppBar position="static" sx={{backgroundColor:"#324a62" , color:"#e5f2fd"}} >
                <Container maxWidth="lg">
                    <Toolbar  sx={{ display:"flex" , alignItems:"center" , justifyContent:"space-between"}}>
                    <Box component="div"  display="flex" alignItems="center">
                        <AutoStoriesIcon />
                        <Typography  component="h1" variant="h5" fontWeight="bold" mr={1} >
                            <Link className={styles.type} to="/" style={{textDecoration:"none" , color:"#e5f2fd" }}>
                             وبلاگ بوتو استارت
                            </Link>
                        </Typography>
                    </Box>
                    <Box component="div"  display="flex" alignItems="center"  >
                    <Typography  component="p"  variant="h5" fontSize={18} fontWeight={700}>
                            <Link className={styles.type} to="/authorsAll" style={{textDecoration:"none"  , color:"#e5f2fd" }}>
                               نویسنده ها
                            </Link>
                        </Typography>
                        <Typography  component="p" variant="h5" fontSize={18}  fontWeight={700} mr={5}>
                            <Link className={styles.type} to="/blogsAll" style={{textDecoration:"none", color:"#e5f2fd"}}>
                               وبلاگ ها
                            </Link>
                        </Typography>
                    </Box>
                    
                    </Toolbar>
                    
                </Container>
            </AppBar>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{height: "70px", width: "100%" }}>
                    <path d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
                       style={{stroke: "none", fill: "#324a62"}}>
                    </path>
            </svg>
        </div>
    );
};

export default Header;