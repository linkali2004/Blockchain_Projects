import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Link, TextField, Typography } from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react'

export default function FormPage() {
  const [change , setChange] = useState(false);

  function Signupcomp()
{
 return(
   <Box sx = {{maxWidth:350}}>
   <Card sx={{maxWidth:345 , padding:2}}>
     <CardHeader title = "Signup" sx={{textAlign:"center"}}>
     </CardHeader>
     <CardContent>
       <form style={{display:"flex", justifyContent:"center" , flexDirection:"column",gap:"15px"}}>
       <TextField type=  "text" variant='outlined' fullWidth label = "Username" required></TextField>
         <TextField type=  "email" variant='outlined' fullWidth label = "Email" required></TextField>
         <TextField type=  "password" variant='outlined' fullWidth label = "Password" required></TextField>
         <Button type = "button" variant= "contained" size=  "medium" color = "secondary" endIcon={<HowToRegIcon></HowToRegIcon>}>Signup</Button>
       </form>
     </CardContent>
     <CardActions sx={{placeContent:"center"}}>
       <Link component="a" underline='none' color = "secondary" onClick ={()=>setChange(!change)} sx={{cursor:"pointer"}}>Go to Login Page</Link>
     </CardActions>
   </Card>
 </Box>
 );
}

function Logincomp()
   {
    return (
      <Box sx = {{maxWidth:350}}>
      <Card sx={{maxWidth:345 , padding:2 , borderRadius:"15px"}}>
        <CardHeader title = "Login" sx={{textAlign:"center"}}>
        </CardHeader>
        <CardContent>
          <form style={{display:"flex", justifyContent:"center" , flexDirection:"column",gap:"15px"}}>
            <TextField type=  "email" variant='outlined' fullWidth label = "Email" required></TextField>
            <TextField type=  "password" variant='outlined' fullWidth label = "Password" required></TextField>
            <Button type = "button" variant= "contained" size=  "medium" color = "secondary" endIcon={<LoginIcon></LoginIcon>}>Login</Button>
          </form>
        </CardContent>
        <CardActions sx={{placeContent:"center"}}>
          <Link component="a" underline='none' color = "secondary" onClick ={()=>setChange(!change)} sx={{cursor:"pointer"}}>Go to Signup Page</Link>
        </CardActions>
      </Card>
    </Box>
    )
   }

  return (
   <>
    {
      (change) ? <Logincomp /> : (<Signupcomp></Signupcomp> )
    }
   </>
  )
}
