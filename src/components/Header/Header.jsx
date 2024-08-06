import React from 'react';
import Navbar from './navbar/Navbar';

function Header() {
  return (
    <div>
      <div className="header flex flex-col md:flex-row justify-between items-center h-auto md:h-36 w-full bg-blue-800 p-4 shadow-lg ">
        <div className="flex items-center mb-3 md:mb-0 ml-14 pt-5 pb-5">
          <img src={'https://via.placeholder.com/800x400.png?text=Slide+2'} className="h-28 w-28 rounded-lg" alt="College Logo" />
        </div>
        <div className="flex-1 text-center mr-16 mb-4 md:mb-0">
          <h1 className="text-white text-6xl md:text-4xl font-bold uppercase">
            Axom Junior College
          </h1>
          <p className="text-white pt-1 text-base md:text-lg">
          Margherita, Agbandha Siding, Margherita, Assam 786181
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
