import { Button, Card, CardActions, CardContent, CardMedia, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <Container maxWidth="xl" sx={{background:"#e3e3e3",color:"black" , minHeight:"400px" , display:"flex" , justifyContent:"center" , alignItems:"center" , padding:"20px"}}>
      <Stack spacing={3}>
      <Typography variant = "h4" sx={{fontWeight:"bolder"}}>Contact Me</Typography>
      <Stack spacing={2} >
        <TextField variant='outlined' label = "Name" type = "text" ></TextField>
        <TextField variant='outlined' label = "Email" type = "email"></TextField>
        <TextField variant='outlined' label = "Phone" type = "number"></TextField>
        <TextField variant='outlined' label = "Address" type = "text"></TextField>
      </Stack>
      <Button type = "button" variant = "contained" sx={{backgroundColor:"black"}}>We will contact you soon</Button>
      </Stack>
    </Container>
  )
}
