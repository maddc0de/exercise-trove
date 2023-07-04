import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from '../bodyPart/BodyPart';
import ExerciseCard from '../exerciseCard/ExerciseCard';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import './HorizontalScrollBar.css';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, bodyParts }) => {
  console.log(`PRINT THIS ${bodyParts}`);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map( part => (
        <Box key={part.id || part}
             partId={part.id || part}
             title={part.id || part}
             m="0 40px"
        >
          {bodyParts? <BodyPart part={part} boydPart={bodyPart} setBodyPart={setBodyPart} />
            : <ExerciseCard exercise={part}/>
          }
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar