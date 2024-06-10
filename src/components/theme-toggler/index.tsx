'use client';
import React, { useState, useEffect, FC } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

interface ToggleButtonProps {
  icon: React.ReactNode;
  onChange: () => void;
}

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

  const ToggleButton: FC<ToggleButtonProps> = ({ icon, onChange }) => {
    return (
      <div
        onClick={onChange}
        className=' cursor-pointer border border-borderColor rounded py-2 px-3'
      >
        {icon}
      </div>
    );
  };

  return (
    <div>
      {theme === 'dark' ? (
        <ToggleButton icon={<SunIcon className='size-6' />} onChange={handleLight} />
      ) : (
        <ToggleButton icon={<MoonIcon className='size-6' />} onChange={handleTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
