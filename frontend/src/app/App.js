import React from 'react'
import { Route, Routes } from 'react-router-dom'; //use to route between homepage and exercise-details page
import { Box } from '@mui/material'; // Box component in Material-UI is a layout and flexible container

import './App.css';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import ExerciseDetail from '../pages/exerciseDetail/ExerciseDetail';
import Footer from '../components/footer/Footer';

const app = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default app