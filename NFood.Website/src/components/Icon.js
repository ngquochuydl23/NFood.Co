import * as React from 'react';

export const Icon = ({ icon, size = 24, width, height, onClick }) => {

  let icHeight = Boolean(height) ? height : size;
  let icWidth = Boolean(width) ? width : size;

  return (
    <img
      src={Boolean(icon) && icon}
      width={icHeight}
      height={icWidth} />
  );
}

export const IconHasBg = ({ icon, size }) => {
  return (
    <div>
      <img src={Boolean(icon) && icon} width={size} height={size} />
    </div>
  );
}