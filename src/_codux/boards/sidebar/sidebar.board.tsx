import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Sidebar from '../../../components/Sidebar/Sidebar';

export default createBoard({
  name: 'Sidebar',
  Board: () => <Sidebar />,
  environmentProps: {
    canvasHeight: 900
  }
});
