import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material';

import BannerImage from '../../assets/images/banner.jpg'
import Dumbbell from '../../assets/images/dumbbell.jpg'
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import './Banner.css';

const Banner = ({ setExercises }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // checks if current viewport width matches the specified media query
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleExploreClick = async () => {
    const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    console.log(`exercise data from banner button: ${exerciseData}`)
    setExercises(exerciseData);
    window.scrollTo({ top: 1500, behavior: 'smooth' })
  }

  return (
    <>
      {isMobile ? (
        // this content renders when the screen size is smaller (banner image is hidden)
        <Box
          sx={{
          position: 'relative',
          mt: { lg: '212px', xs: '70px' },
          ml: { sm: '50px' },
          p: '20px',
          display: 'flex',
          flexDirection: { xs: 'column' },
          alignItems: { xs: 'center', sm: 'flex-start' } }}
        >
          <img
            src={Dumbbell}
            alt="dumbbell"
            className="dumbbell-img"
            style={{
              flex: '1 1 auto',
              maxWidth: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
          <Box
            sx={{
              zIndex: 1, // Ensures content is displayed on top of the image
              pt: { sm: '120px' }
            }}
          >
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
              Exercise Trove
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="5px" mt="30px">
              DISCOVER AND UNLOCK
            </Typography>
            <Typography fontWeight="900" sx={{ fontSize: { lg: '58px', xs: '35px' } }} lineHeight="35px" mb={4}>
              Your Fitness Fortune
            </Typography>
            <Button
              variant="contained"
              color="error"
              href="#exercises"
              sx={{ backgroundColor: '#ff2625', padding: '10px' }}
              onClick={handleExploreClick}
            >
              EXPLORE EXERCISES
            </Button>
          </Box>
        </Box>
      ) : (
        // this content renders when the screen size is larger (banner image is visible)
        <Box sx={{ mt: { lg: '212px', xs: '70px'}, ml: { sm: '50px'} }} position="relative" p="20px">
          <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Exercise Trove
          </Typography>
          <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '30px'} }} mb="5px" mt="30px">
            DISCOVER AND UNLOCK
          </Typography>
          <Typography fontWeight="900" sx={{ fontSize: { lg: '58px', xs: '35px'} }} lineHeight="35px" mb={4}>
            Your Fitness Fortune
          </Typography>
          <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '10px'}} onClick={handleExploreClick}>
            EXPLORE EXERCISES
          </Button>
          <Typography mt="90px" fontSize="200px" fontWeight="600" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none'}}} lineHeight="1">
            Health <br />
            is Wealth <span className='spark'>✧⋆</span>
          </Typography>
          <img src={BannerImage} alt="banner" className="banner-img"/>
        </Box>
      )}
    </>
  )
}

export default Banner