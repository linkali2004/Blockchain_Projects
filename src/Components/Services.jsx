import { Button, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'

export default function Services() {
  return (
    <Container maxWidth="xl" sx={{background:"black",color:"#b3b5b4" , minHeight:"600px" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <Stack spacing={3} sx = {{paddingTop:"18px" , paddingBottom:"18px"}}>
      <Typography variant = "h4" sx={{fontWeight:"bolder"}}>Services</Typography>
      <Stack direction = {{xs:"column" , sm:"column" , md:"row" , lg:"row"}} spacing={2}>
        <Card  sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image="/top11.png"
        title="green iguana"
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Web Development
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image="/What is UIUX Transformation and How Does it Benefit Businesses-04_0.jpg"
        title="green iguana"
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          UI / UX 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image="/blockchain.jpg"
        title="green iguana"
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blockchain Development
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
      </Stack>
      </Stack>
    </Container>
  )
}
