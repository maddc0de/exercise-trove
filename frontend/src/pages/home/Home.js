import React, { useState } from 'react';
import { Box } from '@mui/material';

import './Home.css';
import Banner from '../../components/banner/Banner';
import SearchExercises from '../../components/searchExercises/SearchExercises';
import Exercises from '../../components/exercises/Exercises';

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('')

  return (
    <Box>
      <Banner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home