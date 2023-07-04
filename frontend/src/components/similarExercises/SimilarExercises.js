import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from '../horizontalScrollBar/HorizontalScrollBar';

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px' }}} >
      <Typography variant="h3">
         Exercises that targets similar muscle group
      </Typography>
      <Stack direction="row">
        {targetMuscleExercises.length && <HorizontalScrollBar data={targetMuscleExercises}/>}
      </Stack>
    </Box>
  )
}
 
export default SimilarExercises