import React from 'react';
import { Stack, Typography } from '@mui/material';

import './Footer.css'

const Footer = () => {
  return (
    <Stack gap="40px" alignItems="center" mt="80px" mb="20px" bgcolor="fff3f4">
      <Typography> 
        made by: <a href="https://github.com/maddc0de/workout-app" className='username'>maddc0de</a>
        &nbsp;&nbsp;&nbsp;&nbsp;guided by: JavaScript Mastery
      </Typography>
    </Stack>
  )
}

export default Footer