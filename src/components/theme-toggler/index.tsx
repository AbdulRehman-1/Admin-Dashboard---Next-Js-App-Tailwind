'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const handleTheme = () => {
    document.documentElement.classList.add('dark');
    document.querySelector('html')?.setAttribute('data-theme', 'dark');
  };
  const handleLight = () => {
    document.documentElement.classList.remove('dark');
    document.querySelector('html')?.setAttribute('data-theme', '');
  };

  return <div className='border border-gray'></div>;
};

export default ThemeToggle;
