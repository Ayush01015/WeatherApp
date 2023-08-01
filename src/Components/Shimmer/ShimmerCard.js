import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';

const ShimmerCard = () => {
  const [cardWidth, setCardWidth] = useState(230);
  const [cardHeight, setCardHeight] = useState(400);

  useEffect(() => {
    const updateCardDimensions = () => {
      const screenWidth = window.innerWidth;

      // Calculate and set the new dimensions based on the screen width
      if (screenWidth < 350) {
        setCardWidth(230);
        setCardHeight(400);
      } else if (screenWidth < 500 && screenWidth > 400) {
        setCardWidth(307);
        setCardHeight(350);
      } else if(screenWidth > 724) {
        setCardWidth(480);
        setCardHeight(400);
      }
    };

    // Add event listener to update dimensions on screen resize
    window.addEventListener('resize', updateCardDimensions);

    // Initial update of card dimensions
    updateCardDimensions();

    // Cleanup: Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCardDimensions);
    };
  }, []);

  return (
    <>
      <Skeleton variant="rectangular" width={cardWidth} height={cardHeight} />
    </>
  );
};

export default ShimmerCard;
