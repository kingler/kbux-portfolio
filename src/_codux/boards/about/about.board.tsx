import React from 'react';
import { createBoard } from '@wixc3/react-board';
import About from '../../../components/About/About';

export default createBoard({
  name: 'About',
  Board: () => <About />,
  environmentProps: {
    canvasHeight: 900
  }
});