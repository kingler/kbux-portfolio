import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Image from '../../../components/Images/Image';

export default createBoard({
  name: 'Image',
  Board: () => <Image />,
  environmentProps: {
    canvasHeight: 900
  }
});

