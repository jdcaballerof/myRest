import * as React from 'react';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/system';


const stl = {
    boxStyle: {
        backgroundColor: 'cyan',
        width: 300,
        height: 300,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      },
      flexCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      p:{
        color: 'error.main',
        bgcolor: 'success.main',
        fontWeight: 900
      }

}

export const BoxPractice = () => {
  return (
    <div className='space-y-4'>
        <Box sx={[stl.boxStyle, stl.flexCenter, {padding: 2}]} elevation={10}>  
          <Typography variant='h6' component={'h2'} sx={stl.p} >Box - Typography </Typography> 
          <p> Tiene <code>variant='h6' component= &#123;'h2'&#125;</code> forma de h6 pero es un componente h2 </p> 
        </Box>

        <div style={{...stl.boxStyle, ...stl.flexCenter, padding: '1rem' }}>  
          div 
          <p>Es igual que el componente Box, pero en Mui se usa Box en vez del div</p>  
        </div>

        <Box className='flex justify-center items-center w-72 h-72 bg-cyan-300' > 
          <Typography variant='h2' component={'h5'} >Box - Tailwaind</Typography> 
        </Box>

        <Container sx={[stl.boxStyle, stl.flexCenter]} > 
          <p>Container:</p> <p>Se centra solito horizontalmente</p> 
          <p>Es el contenedor de la pagina</p>  
        </Container>

        <Card sx={[stl.boxStyle, stl.flexCenter]} variant="outlined"> Card </Card>

        <Paper sx={[stl.boxStyle, stl.flexCenter, {padding: 2}]} elevation={10} > 
          <p>Paper</p> 
          <p>Aunque es muy similar estos 2 ultimos elementos hay quienes prefieren usar Paper sobre Card dado que tiene algunas props extras</p> 
          <p>Como <code>elevation= &#123;10&#125;</code> que da  </p>
        </Paper>
        {/* <Box sx={stl.boxStyle} /> */}
    </div>
  );
}





