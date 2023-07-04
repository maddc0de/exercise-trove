import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from '../horizontalScrollBar/HorizontalScrollBar';
import Loader from '../../utils/Loader'

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px' }}} >
      <Typography variant="h3" mb={5}>
         Exercises that targets similar muscle group
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>
          : <Loader />
        }
      </Stack>
    </Box>
  )
}
 
export default SimilarExercises