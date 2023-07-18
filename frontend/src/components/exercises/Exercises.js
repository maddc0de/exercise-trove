import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from '../exerciseCard/ExerciseCard';
import './Exercises.css';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9

  let currentExercises = [];
  if (exercises.length !== 0) {
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  }

  const paginate = (e, value) => {  // done bts by material ui
    setCurrentPage(value);
    window.scrollTo({ top: 1250, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart !== '') {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart])

  return (
    <>
      {exercises.length !== 0 && (
        <Box id="exercises"
          sx={{mt: { lg: '110px'}}}
          mt="50px"
          p="20px"  
        >
          <Typography variant="h3" mb="46px">
            Showing Results
          </Typography>
          <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' }}} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise}/>
            ))}
          </Stack>
          <Stack mt="100px" alignItems="center">
              {exercises.length > 9 && (
                <Pagination 
                  color="standard"
                  shape="rounded"
                  count={Math.ceil(exercises.length / exercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"
                />
              )}
          </Stack>
        </Box>
      )}
      { typeof exercises === 'object' && Object.keys(exercises).length === 0 && (
        <Stack justifyContent="center" p="40px">
          <Typography variant="h4">sorry, we couldn't find any results.</Typography>
          <Typography variant="h6" mt={2}>are you looking for exercises by body part? try choosing from the category above. </Typography>
          <Typography variant="h6"mt={1}>If not, double check your search for any typos or spelling errors - or try a different search term. For example: "dumbbell"</Typography>
        </Stack>
      )}
    </>
  )
}

export default Exercises