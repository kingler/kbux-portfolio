import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Carousel } from 'react-responsive-carousel';

export default createBoard({
  name: 'Carousel',
  Board: () => <Carousel />,
  environmentProps: {
    canvasHeight: 900
  }
});

