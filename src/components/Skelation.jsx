// components/SkeletonLoader.js
import React from 'react';
import './SkeletonLoader.css'; // Styling file

const Skeleton = ({ width = '100%', height = '20px', className = '' }) => {
  return (
    <div 
      className={`skeleton ${className}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
