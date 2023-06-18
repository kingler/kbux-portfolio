import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ToggleSwitch } from '../../../components/ToggleSwitch/ToggleSwitch';

export default createBoard({
  name: 'ToggleSwitch',
  Board: () => <ToggleSwitch />,
  environmentProps: {
    canvasHeight: 18
  }
});
