import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../../assets/icons/gym.png'
import './BodyPart.css';

const BodyPart = ({ part, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === part ? '4px solid #ff2625' : '',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(part);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });  // built in browser API
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px'}} />
      <Typography fontSize={"24px"} fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {part}
      </Typography>
    </Stack>
  )
}

export default BodyPart