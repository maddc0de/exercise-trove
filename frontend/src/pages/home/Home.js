import React from 'react';
import { Box } from '@mui/material';

import './Home.css';
import Banner from '../../components/banner/Banner';
import SearchExercises from '../../components/searchExercises/SearchExercises';
import Exercises from '../../components/exercises/Exercises';

const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home