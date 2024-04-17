import React from 'react';
import JSXEditorRenderer from './components/JSXEditorRenderer';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [activeExample, setActiveExample] = useState('useState');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <>
    <div className='w-100 bg-gray-800 border-black border-red-500 border-4 p-2 flex-col"'>
      <div className='w-30'>
      <nav className="p-4 border-red-500 border-4 p-8 max-h-screen">
    {/* Toggle button */}
    <button
        className="p-2 bg-gray-700 text-white rounded-md cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
        Select State
    </button>

    {/* Dropdown menu */}
    {isDropdownOpen && (
        <ul className="bg-gray-800 text-white p-4 rounded-md">
            <li
                className={`py-2 px-4 cursor-pointer ${activeExample === 'useState' ? 'bg-gray-700' : ''}`}
                onClick={() => {
                    setActiveExample('useState');
                    setIsDropdownOpen(false); // Close the dropdown
                }}
            >
                useState
            </li>
            <li
                className={`py-2 px-4 cursor-pointer ${activeExample === 'useEffect' ? 'bg-gray-700' : ''}`}
                onClick={() => {
                    setActiveExample('useEffect');
                    setIsDropdownOpen(false); // Close the dropdown
                }}
            >
                useEffect
            </li>
            <li
                className={`py-2 px-4 cursor-pointer ${activeExample === 'useContext' ? 'bg-gray-700' : ''}`}
                onClick={() => {
                    setActiveExample('useContext');
                    setIsDropdownOpen(false); // Close the dropdown
                }}
            >
                useContext
            </li>
            <li
                className={`py-2 px-4 cursor-pointer ${activeExample === 'useReducer' ? 'bg-gray-700' : ''}`}
                onClick={() => {
                    setActiveExample('useReducer');
                    setIsDropdownOpen(false); // Close the dropdown
                }}
            >
                useReducer
            </li>
            <li
                className={`py-2 px-4 cursor-pointer ${activeExample === 'useMemo' ? 'bg-gray-700' : ''}`}
                onClick={() => {
                    setActiveExample('useMemo');
                    setIsDropdownOpen(false); // Close the dropdown
                }}
            >
                useMemo
            </li>
        </ul>
    )}
</nav>
      {/* <nav className="p-4 border-red-500 border-4 p-8 max-h-screen">
        <ul>
          <li
            className={`py-2 px-4 cursor-pointer ${
              activeExample === 'useState' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveExample('useState')}
          >
            useState
          </li>
          <li
            className={`py-2 px-4 cursor-pointer ${
              activeExample === 'useEffect' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveExample('useEffect')}
          >
            useEffect
          </li>
          <li
            className={`py-2 px-4 cursor-pointer ${
              activeExample === 'useContext' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveExample('useContext')}
          >
            useContext
          </li>
          <li
            className={`py-2 px-4 cursor-pointer ${
              activeExample === 'useReducer' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveExample('useReducer')}
          >
            useReducer
          </li> 
          <li
            className={`py-2 px-4 cursor-pointer ${
              activeExample === 'useMemo' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveExample('useMemo')}
          >
            useMemo
          </li>
        </ul>
      </nav> */}
      </div>

      <div className='border-red-500 border-4 p-8'>
      <JSXEditorRenderer/>
      </div>
      


    </div>
    </>
  )
}

export default App;
