import { AppBar, Badge, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export default function Navbartop() {
  return (
    <AppBar sx={{backgroundColor:"black" , padding:"5px" , boxShadow:0}} position='static'>
        <Grid container>
            <Grid item xs = {3} sx={{display:"flex" , justifyContent:"flex-end" , alignItems:"center"}}>
                <Typography variant="caption" sx={{color:"#b3b5b4"}}>
                    +2500000000
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color = "#b3b5b4" sx={{marginLeft:"4px" , marginRight:"4px"}}></Divider>
            <Grid item xs = {3} sx={{display:"flex" , justifyContent:"flex-start"}}>
                <Stack direction = "row" spacing={1}>
                <IconButton sx={{margin:0 , padding:0}}>
                    <InstagramIcon sx={{color:"#b3b5b4" ,fontSize:"14px"}} />
                </IconButton>
                <IconButton sx={{margin:0 , padding:0}}>
                    <FacebookIcon sx={{color:"#b3b5b4" ,fontSize:"14px"}}></FacebookIcon>
                </IconButton>
                <IconButton sx={{margin:0 , padding:0}}>
                    <TwitterIcon sx={{color:"#b3b5b4" ,fontSize:"14px"}}></TwitterIcon>
                </IconButton>
                <IconButton sx={{margin:0 , padding:0}}>
                    <GoogleIcon sx={{color:"#b3b5b4" ,fontSize:"14px"}}></GoogleIcon>
                </IconButton>
                <IconButton sx={{margin:0 , padding:0}}>
                    <LinkedInIcon sx={{color:"#b3b5b4" ,fontSize:"14px"}}></LinkedInIcon>
                </IconButton>
                </Stack>
            </Grid>
            <Grid item xs = {3} sx={{display:"flex" , justifyContent:"flex-end" , alignItems:"center"}}>
            <Stack direction = "row" spacing={1}>
                <Badge badgeContent={4} color = "secondary" variant = 'dot' sx={{cursor:"pointer"}}>
                <ShoppingCartIcon sx={{color:"#b3b5b4" ,fontSize:"14px"}} />
                   </Badge>
                <IconButton sx={{margin:0 , padding:0}}>
                    <SearchIcon sx={{color:"#b3b5b4" ,fontSize:"14px"}}></SearchIcon>
                </IconButton>
                </Stack>
            </Grid>
            <Divider orientation="vertical" flexItem color = "#b3b5b4" sx={{marginLeft:"4px" , marginRight:"4px"}}></Divider>
            <Grid item xs = {2}>
                <Typography variant = "caption" sx = {{color:"#b3b5b4"}}>Login</Typography>
            </Grid>
            </Grid>
    </AppBar>
  )
}
