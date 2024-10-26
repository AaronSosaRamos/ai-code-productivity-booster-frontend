import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-gray-700 dark:text-gray-400 text-sm text-center md:text-left transition-colors duration-300">
          &copy; {year} <span className="font-semibold">AI Code Productivity Booster</span>. All Rights Reserved.
        </div>
        <div className="text-gray-700 dark:text-gray-400 text-sm text-center md:text-right transition-colors duration-300">
          Made by: <span className="font-semibold">Wilfredo Aaron Sosa Ramos</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
