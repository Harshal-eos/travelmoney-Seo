
import React from 'react';

const BackgroundElements = () => {
  return (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-travel-gray-light/30 to-white -z-10" />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-travel-blue/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-travel-blue-light/5 blur-2xl -z-10" />
    </>
  );
};

export default BackgroundElements;
