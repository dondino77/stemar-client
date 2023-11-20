import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './FullScreenLoader.scss';

const FullScreenLoader = () => {
  return (
    <div className="fullscreen-loader">
      <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
    </div>
  );
};

export default FullScreenLoader;
