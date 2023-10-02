import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
  return (
    <Container maxWidth="xl" sx={{background:"black" , color:"white" , minHeight:"300px"}}>
        <Stack  sx={{display:"flex" ,flexDirection:"column", gap:1,justifyItems:"center" , paddingTop:"83.75px"}}>
            <Box sx={{display:"flex" , gap:2, justifyContent:"center"}}>
                <Typography fontSize={{xs:"1.5rem",sm:"2rem" , md:"2.5rem" ,lg:"3rem" }} sx={{color:"white"}}>Hi</Typography>
                <Typography fontSize={{xs:"1.5rem",sm:"2rem" , md:"2.5rem" ,lg:"3rem" }} sx={{color:"#b3b5b4"}}>I am Shrey Varad Dwivedi</Typography>
            </Box>
            <Box sx={{display:"flex" , gap:2, justifyContent:"center"}}>
                <Typography variant = "body1" sx={{color:"#b3b5b4"}}>I am a Full Stack Web Developer</Typography>
            </Box>
            <Box sx={{display:"flex" , gap:2, justifyContent:"center"}}>
                <Button variant = "outlined" sx={{color:"#b3b5b4"}}>Continue</Button>
            </Box>
        </Stack>
    </Container>
  )
}
