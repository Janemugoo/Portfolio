import React from 'react';

const HomePage = () => {
  return (
    <div className="flex">
      {/* Left side - Text box */}
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-bold mb-4">Hello There</h1>
        <p>Hi..... I am a Web Developer</p>
      </div>

      {/* Right side - Image */}
      <div className="flex-1">
        <img src="https://example.com/name.jpg" alt="Your Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HomePage;
