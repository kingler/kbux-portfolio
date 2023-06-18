import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Projects from '../../../components/Projects/Projects';

export default createBoard({
  name: 'Projects',
  Board: () => <Projects />,
  environmentProps: {
    canvasHeight: 900
  }
});
