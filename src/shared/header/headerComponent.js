import React, { useState } from 'react';
import logo from '../../assets/img/logo.jpeg'; // Importiere das Bild

const HeaderComponent = () => {
  const [activeLink, setActiveLink] = useState('Über uns');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="bg-gray-100 text-black p-4">
      <div className="relative flex items-center justify-between h-17">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {/* Icon when menu is closed */}
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* Icon when menu is open */}
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="#"
                onClick={() => handleLinkClick('Über uns')}
                className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === 'Über uns' ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'}`}
                aria-current={activeLink === 'Über uns' ? 'page' : undefined}
              >
                Über uns
              </a>
              <a
                href="#"
                onClick={() => handleLinkClick('Team')}
                className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === 'Team' ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'}`}
              >
                Team
              </a>
              <a
                href="#"
                onClick={() => handleLinkClick('Unser Angebot')}
                className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === 'Unser Angebot' ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'}`}
              >
                Unser Angebot
              </a>
              <a
                href="#"
                onClick={() => handleLinkClick('Kontakt')}
                className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === 'Kontakt' ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'}`}
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center">
            <img className="h-[120px] w-[200px] bg-cover object-cover" src={logo} alt="Company Logo"/>
          </div>
      </div>
    </header>
  );
};

export default HeaderComponent;