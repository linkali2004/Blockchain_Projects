import { Drawer, IconButton, List, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';

export default function DrawerComp() {
    const[open , setOpen] = useState(false);
  return (
    <div>
      <Drawer open={open} onClose={()=>setOpen(false)}>
        <List>
        <ListItemButton>
                <ListItemAvatar>
                    <IconButton>
                        <HomeIcon></HomeIcon>
                    </IconButton>
                </ListItemAvatar>
                <ListItemText>
                    <Typography>Home</Typography>
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <IconButton>
                        <Inventory2Icon></Inventory2Icon>
                    </IconButton>
                </ListItemAvatar>
                <ListItemText>
                    <Typography>Products</Typography>
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <IconButton>
                        <MiscellaneousServicesIcon></MiscellaneousServicesIcon>
                    </IconButton>
                </ListItemAvatar>
                <ListItemText>
                    <Typography>Services</Typography>
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <IconButton>
                        <ConnectWithoutContactIcon />
                    </IconButton>
                </ListItemAvatar>
                <ListItemText>
                    <Typography>Contact</Typography>
                </ListItemText>
            </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={()=> setOpen(!open)}> 
        <MenuIcon></MenuIcon>
      </IconButton>
    </div>
  )
}
