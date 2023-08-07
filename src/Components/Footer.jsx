import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-white">
          © {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
