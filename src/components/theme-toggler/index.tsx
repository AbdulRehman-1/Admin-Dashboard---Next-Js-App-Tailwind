'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    document.documentElement.classList.add('dark');
    // else if (theme == 'dark') document.documentElement.classList.add('light');
  };
  const handleLight = () => {
    document.documentElement.classList.remove('dark');
  };

  return (
    <div>
      <button onClick={handleTheme}>Dark</button>
      <button onClick={handleLight}>Light</button>
    </div>
  );
};

export default ThemeToggle;
