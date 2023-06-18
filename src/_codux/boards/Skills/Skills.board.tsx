import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Skills from '../../../components/Skills/Skills';

export default createBoard({
  name: 'Skills',
  Board: () => <Skills />,
  environmentProps: {
    canvasHeight: 900
  }
});