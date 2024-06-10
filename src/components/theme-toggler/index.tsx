'use client';
import { useState, useEffect } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.querySelector('html')?.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.querySelector('html')?.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  };

  const handleLight = () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
  };

  return (
    <div>
      {theme === 'dark' ? (
        <SunIcon className='size-10' onClick={handleLight} />
      ) : (
        <MoonIcon className='size-10' onClick={handleTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
