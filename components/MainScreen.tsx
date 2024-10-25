import { motion } from 'framer-motion';
import { FaCode, FaBook, FaBug, FaCogs } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const services = [
  {
    title: 'Refactoring Assistant',
    description: 'Enhance your code with design pattern detection.',
    icon: <FaCogs className="text-blue-500 text-6xl" />,
    route: '/refactor-assistant', 
  },
  {
    title: 'Documentation Generator Assistant',
    description: 'Automate your documentation process effortlessly.',
    icon: <FaBook className="text-green-500 text-6xl" />,
    route: '/doc-generator',
  },
  {
    title: 'Multi-Agent Debugging Assistant',
    description: 'Collaborate for faster debugging and problem-solving.',
    icon: <FaBug className="text-red-500 text-6xl" />,
    route: '/multi-agent-debug', 
  },
  {
    title: 'LLM Application Development Assistant',
    description: 'Build intelligent applications with ease.',
    icon: <FaCode className="text-purple-500 text-6xl" />,
    route: '/llm-development', 
  },
];

const MainPage = () => {
  const router = useRouter(); // Inicializar useRouter

  const handleNavigation = (route: string) => {
    router.push(route); // Redirigir a la ruta correspondiente
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-blue-100 dark:bg-gray-900 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white flex items-center justify-center">
          🚀 AI Code Productivity Booster <span className="ml-2">🛠️</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Unlock the full potential of your coding projects with our intelligent assistance tools.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 text-center rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-center items-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            <button
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
              onClick={() => handleNavigation(service.route)} // Llamar a handleNavigation con la ruta correspondiente
            >
              Use it
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
