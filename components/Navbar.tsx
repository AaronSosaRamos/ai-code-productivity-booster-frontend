import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const services = [
  'Refactoring Assistant with Design Pattern Detection',
  'Documentation Generator Assistant',
  'Multi-Agent Debugging Assistant',
  'LLM Application Development Assistant',
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className={`bg-white dark:bg-gray-800 p-4 shadow-md transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">AI Code Productivity Booster</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-800 dark:text-white hover:text-blue-600">Home</a>
          <div className="relative">
            <button onClick={toggleServices} className="flex items-center text-gray-800 dark:text-white hover:text-blue-600">
               AI Code Productivity Booster <FaChevronDown className="ml-1" />
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white dark:bg-gray-700 shadow-lg mt-1 rounded-md z-10">
                {services.map((service, index) => (
                  <a key={index} href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="text-gray-800 dark:text-white hover:text-blue-600">Contact Us</a>
          <button onClick={toggleTheme} className="text-gray-800 dark:text-white">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4">
          <a href="/" className="block text-gray-800 dark:text-white hover:text-blue-600">Home</a>
          <button onClick={toggleServices} className="w-full text-left flex items-center text-gray-800 dark:text-white hover:text-blue-600">
            AI Code Productivity Booster <FaChevronDown className="ml-1" />
          </button>
          {isServicesOpen && (
            <div className="bg-white dark:bg-gray-700 rounded-md">
              {services.map((service, index) => (
                <a key={index} href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                  {service}
                </a>
              ))}
            </div>
          )}
          <a href="#" className="block text-gray-800 dark:text-white hover:text-blue-600">Contact Us</a>
          <button onClick={toggleTheme} className="w-full text-left text-gray-800 dark:text-white">
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
