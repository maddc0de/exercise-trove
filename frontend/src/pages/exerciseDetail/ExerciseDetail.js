import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from '../../components/detail/Detail'
import ExerciseVideos from '../../components/exerciseVideos/ExerciseVideos'
import SimilarExercises from '../../components/similarExercises/SimilarExercises'

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail