import { AppBar, Button, ButtonGroup, Grid, IconButton, Tab, Tabs, Toolbar, Typography, useTheme,useMediaQuery, Container, Stack } from "@mui/material";
import WebhookIcon from '@mui/icons-material/Webhook';
import CallIcon from '@mui/icons-material/Call';
import { useState } from "react";
import DrawerComp from "../DrawerComp";
export default function Navbar() {
    const [value , setValue] = useState(0);
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
        <AppBar sx={{boxShadow:0 , color: "black"}} position = "static" color = "transparent">
        <Toolbar>
            <Grid container>
                {isMatch ? <Grid item xs = {2}><DrawerComp></DrawerComp></Grid> : <>
                <Grid item xs ={2} sx={{display:"flex" , justifyContent:"center"}}>
                <IconButton size = "small" color = "inherit">
                    <WebhookIcon></WebhookIcon>
                </IconButton>
               </Grid>
               <Grid item xs = {6} sx={{display:"flex" , justifyContent:"center"}}>
                <Tabs value = {value} textColor="inherit" onChange={(e , value)=>setValue(value)}>
                    <Tab value = {0} label = "Home"></Tab>
                    <Tab value = {1} label = "Work"></Tab>
                    <Tab value = {2} label = "Services"></Tab>
                    <Tab value = {3} label = "About"></Tab>
                </Tabs>
               </Grid>
               <Grid item xs = {1}></Grid>
               <Grid item xs = {3} sx={{display:"flex" , justifyContent:"flex-end" , alignItems:"center"}}>
                <Stack direction="row">
                    <Button variant = "outlined" color = "inherit" sx={{padding:1.5 , height:"32px"}} endIcon={<CallIcon></CallIcon>}>Contact Me</Button>
                </Stack>
               </Grid>
                </>}
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
