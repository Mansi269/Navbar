import React, {useState} from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["Home", "About", "Menu", "ContactUs", "Login", "Logout"]
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <React.Fragment>
      <Drawer open={openDrawer} 
      onClose={()=>setOpenDrawer(false)}>
        
        <List>
          {
            PAGES.map((page,index)=> (
              <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            ))
           }
          
        </List>
      </Drawer>
      <IconButton sx={{marginLeft: 'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
       <MenuIcon sx={{color: 'white'}}></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp