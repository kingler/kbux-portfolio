import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Education from '../../../components/Education/Education';

export default createBoard({
  name: 'Image',
  Board: () => <Education />,
  environmentProps: {
    canvasHeight: 900
  }
});
