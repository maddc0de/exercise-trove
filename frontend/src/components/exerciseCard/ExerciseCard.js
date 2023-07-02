import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

import './ExerciseCard.css';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercises/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
      <Stack direction="row">
        <Button className="tag" sx={{ background: '#ffa9a9' }}>
          {exercise.bodyPart}
        </Button>

        <Button className="tag" sx={{ background: '#fcc757' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography className="exercise-card-name">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard