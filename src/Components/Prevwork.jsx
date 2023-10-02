import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export default function Prevwork() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.between("sm"));
  return (
<Container maxWidth="xl" sx={{color:"black" , minHeight:"600px" , display:"flex" , justifyContent:"center" , alignItems:"center" , padding:"12px"}}>
      <Stack spacing={3}>
      <Typography variant = "h4" sx={{fontWeight:"bold"}}>My Previous Work</Typography>
      <Stack spacing={3}>
      <Box sx={{display:"flex" , flexDirection:{xs:"column" , sm:"column" , md:"row" , lg:"row"} ,justifyContent:"space-evenly" ,gap:3, alignItems:"center"}}>
      <Box>
        <Typography variant = "h5" sx={{marginBottom:"4px"}}>The Nexus</Typography>
      <Typography variant = "body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy{<br></br>} 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has {<br></br>} 
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised{<br></br>}
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing{<br></br>}
        software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Box>
        <img src = "/Screenshot (7).png" loading="lazy" width="450px" height="250px" style={{borderRadius:"10px"}}></img>
      </Box>
      <Box sx={{display:"flex" ,  flexDirection:{xs:"column" , sm:"column" , md:"row" , lg:"row"} ,justifyContent:"space-evenly" ,gap:3, alignItems:"center"}}>
      <img src = "/Screenshot (8).png" loading="lazy" width="450px" height="250px" style={{borderRadius:"10px"}}></img>
      <Box>
        <Typography variant = "h5" sx={{marginBottom:"4px"}}>React Pizza Co.</Typography>
      <Typography variant = "body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy{<br></br>} 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has {<br></br>} 
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised{<br></br>}
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing{<br></br>}
        software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Box>
      </Box>
      <Box sx={{display:"flex" ,  flexDirection:{xs:"column" , sm:"column" , md:"row" , lg:"row"} ,justifyContent:"space-evenly" ,gap:3, alignItems:"center"}}>
      <Box>
        <Typography variant = "h5" sx={{marginBottom:"4px"}}>WorldWise</Typography>
      <Typography variant = "body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy{<br></br>} 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has {<br></br>} 
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised{<br></br>}
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing{<br></br>}
        software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Box>
        <img src = "/Screenshot (9).png" loading="lazy" width="450px" height="250px" style={{borderRadius:"10px"}}></img>
      </Box>
      <Box sx={{display:"flex" ,  flexDirection:{xs:"column" , sm:"column" , md:"row" , lg:"row"} ,justifyContent:"space-evenly" ,gap:3, alignItems:"center"}}>
      <img src = "/top11.png" loading="lazy" width="450px" height="250px" style={{borderRadius:"10px"}}></img>
      <Box>
        <Typography variant = "h5" sx={{marginBottom:"4px"}}>Social Media</Typography>
      <Typography variant = "body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy{<br></br>} 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has {<br></br>} 
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised{<br></br>}
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing{<br></br>}
        software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Box>
      </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
