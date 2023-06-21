import React, {useState} from 'react'
import { AppBar, Typography,  Toolbar, Tab, Tabs, Button, useMediaQuery, useTheme  } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';


import '../../styles/NavbarStyles.css';
import DrawerComp from '../DrawerComp';

const PAGES = ["Home", "About", "Menu", "Contact"]
const Navbar = () => {
   const [value, setValue] = useState();
   const theme = useTheme();
     console.log(theme);
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
     console.log(isMatch);  
  return (
      <React.Fragment>
        <AppBar sx={{bgcolor:'black' ,height: '80px'}} >
         <Toolbar>
           {/* <Typography> 
            MY RESTAURANT
           </Typography>  */}
           <FastfoodIcon/>
           
             {
               isMatch ? (
                <>
                 <Typography sx={{fontSize: '1.5rem', paddingLeft: '10%'}}>MY RESTAURANT</Typography>
                 <DrawerComp/>
                </>
               ) : (
                <>
                  <Tabs sx={{marginLeft: 'auto' ,fontSize: '2.5rem'}} textColor= "white" value={value} onChange={(e,value)=> setValue(value)} indicatorColor='secondary'>
                    {
                      PAGES.map((page, index)=> (
                        <Tab key= {index} label ={page}/>
                      )
                      )
                    }
            {/* <Tab label = "Home"/>
            <Tab label = "About"/>
            <Tab label = "Menu"/>
            <Tab label = "Contact Us"/> */}
           </Tabs>
           <Button sx={{marginLeft: 'auto',width: '10%'}} variant= "contained">LOGIN{' '}</Button>
           <Button sx={{marginLeft: "10px", width: '10%'}} variant= "contained">SIGN UP {' '}</Button>
                </>

               )
             }
           
           </Toolbar>
         
        </AppBar>
      
      </React.Fragment>
  )
  }; 
export default Navbar