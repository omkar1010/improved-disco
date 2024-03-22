import React from 'react';
import videoSource from '../video assets/video.mp4';

const VideoBackground = () => {
  const videoStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '500px',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    zIndex: '1', // Ensure text appears above the video
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // optional text shadow
  };

  return (
    <div style={containerStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={textStyle}>
        <h1>Leading the Data Revolution.</h1>
        <h1>Innovation through analytics.</h1>
        {/* Add more text or components as needed */}
      </div>
    </div>
  );
};

export default VideoBackground;
