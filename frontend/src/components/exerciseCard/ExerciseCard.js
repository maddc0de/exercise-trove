import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

import './ExerciseCard.css';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercises/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
      <Stack direction="row">
        <Button className="tag" sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>

        <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography className="exercise-card-name" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }}>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard