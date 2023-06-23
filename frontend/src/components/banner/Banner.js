import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import BannerImage from '../../assets/images/banner.png'
import './Banner.css';

const Banner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Workout App
      </Typography>
      <Typography fontWeight="700"
      sx={{ fontSize: { lg: '44px', xs: '40px'} }}
      mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out featured exercises!
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '10px'}}>
        EXPLORE EXERCISES
      </Button>
      <Typography fontSize="200px" fontWeight="600" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none'}}}>
        Exercise
      </Typography>
      <img src={BannerImage} alt="banner" className="banner-img"/>
    </Box>
  )
}

export default Banner