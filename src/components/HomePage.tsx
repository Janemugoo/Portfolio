import React from 'react';

const HomePage = () => {
  return (
    <div className="flex">
      
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-bold mb-4">Hello There</h1>
        <p>Hi..... I am a Web Developer</p>
      </div>

      
      <div className="flex-1">
        <img src="/name.jpg" alt="Your Image" className="w-full h-screen object-cover rounded " />
      </div>
    </div>
  );
};

export default HomePage;
