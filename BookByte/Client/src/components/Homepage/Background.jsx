import React from 'react';
import Background1 from '../../assets/Home_bg.mp4';

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={Background1} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
