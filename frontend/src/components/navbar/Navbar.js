import React from 'react';
import { Link } from 'react-router-dom'; //
import { Stack } from '@mui/material'; //stack component manages one-dimensional layout

import './Navbar.css'
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row"
    justifyContent="space-around" 
    sx={{ gap: { sm: '50px', xs: '40px'}, 
          mt: { sm: '32px', xs: '20px'}, 
          justifyContent: 'none', 
          px: '20px'}}
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="logo"/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontsize="24px"
        alignItems="flex-end"
      >
        <Link to="/" className="homeLink">Home</Link>
        <a href="#exercises" className="exerciseLink">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar