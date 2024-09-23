import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-6">
      <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-700 dark:text-gray-400 text-sm">
          &copy; {year} AI Code Productivity Booster. All Rights Reserved.
        </div>
        <div className="text-gray-700 dark:text-gray-400 text-sm mt-2 md:mt-0">
          Made by: <span className="font-semibold">Wilfredo Aaron Sosa Ramos</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
