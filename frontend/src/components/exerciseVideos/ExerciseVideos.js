import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(`this is exercise videos: ${exerciseVideos}`)
  return (
    <Box sx={{ marginTop: {lg: '200px', xs: '20px'}}}>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{ flexDirection: { lg: 'row'}, gap: { lg: '110px', xs: '0'} }}
      >
        {exerciseVideos?.slice(0,3).map((item, index) => (
        <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >

        </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos