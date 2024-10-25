import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const services = [
  {
    title: 'Refactoring Assistant with Design Pattern Detection',
    route: '/refactor-assistant', 
  },
  {
    title: 'Documentation Generator Assistant',
    route: '/doc-generator', 
  },
  {
    title: 'Multi-Agent Debugging Assistant',
    route: '/multi-agent-debug',
  },
  {
    title: 'LLM Application Development Assistant',
    route: '/llm-development',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter(); // Inicializamos useRouter

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

  const navigateTo = (route: string) => {
    router.push(route); // Navegación programática
    setIsServicesOpen(false); // Cerrar el menú después de la navegación
    setIsOpen(false); // Cerrar el menú en móviles
  };

  return (
    <nav className={`bg-white dark:bg-gray-800 p-4 shadow-md transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">AI Code Productivity Booster</div>
        <div className="hidden md:flex space-x-4">
          <button onClick={() => router.push('/')} className="text-gray-800 dark:text-white hover:text-blue-600">
            Home
          </button>
          <div className="relative">
            <button onClick={toggleServices} className="flex items-center text-gray-800 dark:text-white hover:text-blue-600">
              AI Code Productivity Booster <FaChevronDown className="ml-1" />
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white dark:bg-gray-700 shadow-lg mt-1 rounded-md z-10">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => navigateTo(service.route)}
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-left"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => router.push('/contact')} className="text-gray-800 dark:text-white hover:text-blue-600">
            Contact Us
          </button>
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
          <button onClick={() => router.push('/')} className="block text-gray-800 dark:text-white hover:text-blue-600">
            Home
          </button>
          <button onClick={toggleServices} className="w-full text-left flex items-center text-gray-800 dark:text-white hover:text-blue-600">
            AI Code Productivity Booster <FaChevronDown className="ml-1" />
          </button>
          {isServicesOpen && (
            <div className="bg-white dark:bg-gray-700 rounded-md">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => navigateTo(service.route)}
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-left"
                >
                  {service.title}
                </button>
              ))}
            </div>
          )}
          <button onClick={() => router.push('/contact')} className="block text-gray-800 dark:text-white hover:text-blue-600">
            Contact Us
          </button>
          <button onClick={toggleTheme} className="w-full text-left text-gray-800 dark:text-white">
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
