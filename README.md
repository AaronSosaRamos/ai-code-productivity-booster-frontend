# AI Code Productivity Booster Frontend

**AI Code Productivity Booster Frontend** is a cutting-edge web application designed to assist developers with multiple coding tasks through intelligent multi-agent systems. It offers four key assistants: **Refactoring Assistant**, **Documentation Generator Assistant**, **Multi-Agent Debugging Assistant**, and **LLM Application Development Assistant**. These agents streamline various aspects of coding, debugging, documentation, and the development of LLM applications, making the development process more efficient and productive.

Developed by **Wilfredo Aaron Sosa Ramos**, this frontend application is deployed on **Vercel** and integrates seamlessly with the backend API to provide intelligent assistance for coding tasks. It is built using modern web technologies for optimal performance and user experience.

## Table of Contents

- [1. Features](#1-features)
- [2. Multi-Agent Services](#2-multi-agent-services)
  - [2.1 Refactoring Assistant](#21-refactoring-assistant)
  - [2.2 Documentation Generator Assistant](#22-documentation-generator-assistant)
  - [2.3 Multi-Agent Debugging Assistant](#23-multi-agent-debugging-assistant)
  - [2.4 LLM Application Development Assistant](#24-llm-application-development-assistant)
- [3. Technologies Used](#3-technologies-used)
- [4. Environment Variables](#4-environment-variables)
- [5. Installation Guide](#5-installation-guide)
- [6. How to Use](#6-how-to-use)

---

## 1. Features

**AI Code Productivity Booster Frontend** offers a range of features designed to enhance developer productivity. These features include:

- **Refactoring Assistant**: Automates code refactoring tasks to improve code quality and maintainability.
- **Documentation Generator Assistant**: Generates accurate and detailed documentation for codebases, saving time on manual documentation.
- **Multi-Agent Debugging Assistant**: Provides intelligent debugging assistance by identifying and suggesting solutions for errors and bugs.
- **LLM Application Development Assistant**: Assists in developing large language model (LLM) applications with integrated support for code generation, optimization, and testing.

These services leverage multi-agent systems to automate and optimize various development processes, making them faster, more efficient, and less error-prone.

---

## 2. Multi-Agent Services

The **AI Code Productivity Booster Frontend** offers four core multi-agent services to assist developers in various coding and development tasks.

### 2.1 Refactoring Assistant

The **Refactoring Assistant** automates code refactoring tasks, improving code structure and quality. Key features include:

- **Code Simplification**: Refactors complex code into simpler, more readable forms.
- **Optimization**: Identifies inefficient code and suggests optimizations to enhance performance.
- **Best Practices Enforcement**: Ensures that code adheres to industry standards and best practices for maintainability and scalability.

This assistant is ideal for developers looking to clean up their codebases and improve long-term code maintainability.

### 2.2 Documentation Generator Assistant

The **Documentation Generator Assistant** automates the creation of detailed and accurate documentation for your code. It can:

- **Generate Function-Level Documentation**: Automatically document individual functions or methods in the codebase.
- **Class and Module Documentation**: Provides comprehensive documentation for classes, modules, and entire codebases.
- **Inline Comments**: Adds meaningful comments within the code to help future developers understand the logic.

This assistant saves developers significant time and effort by generating high-quality documentation that enhances code readability and usability.

### 2.3 Multi-Agent Debugging Assistant

The **Multi-Agent Debugging Assistant** is designed to help developers identify and fix bugs more efficiently. Key features include:

- **Error Identification**: Detects common coding errors and bugs based on patterns and known issues.
- **Suggested Fixes**: Provides potential solutions and fixes for identified errors.
- **Interactive Debugging**: Allows developers to engage in interactive debugging sessions with step-by-step guidance.

This assistant is perfect for reducing time spent on debugging and increasing overall development speed.

### 2.4 LLM Application Development Assistant

The **LLM Application Development Assistant** helps developers create applications that leverage large language models (LLMs). It offers:

- **Code Generation**: Generates code snippets or modules for LLM-based applications.
- **Optimization Suggestions**: Provides insights and suggestions for optimizing LLM applications for performance and scalability.
- **Testing and Evaluation**: Assists in testing and evaluating the performance of LLM applications to ensure they meet the desired standards.

This assistant is particularly useful for developers working on AI-driven applications or projects that integrate LLMs.

---

## 3. Technologies Used

The **AI Code Productivity Booster Frontend** is built with modern web technologies to ensure a high level of performance, scalability, and maintainability. Key technologies include:

- **NextJS**: A React-based framework for server-side rendering and static site generation, offering high performance and SEO benefits.
- **ShadCN**: Provides reusable components and a design system for building clean and responsive user interfaces.
- **axios**: A promise-based HTTP client used for making API requests to the backend services.
- **react-markdown**: Enables rendering of markdown content within React components, useful for displaying formatted text or documentation.
- **zod**: A TypeScript-first schema declaration and validation library, integrated with **react-hook-form** for input validation.
- **react-hook-form**: Simplifies form handling and validation in React components, ensuring efficient and effective input management.
- **@hookform/resolvers**: Connects **react-hook-form** with **zod** to ensure seamless validation logic.
- **react-toastify**: Provides real-time notifications for user feedback, such as success or error messages.
- **Tailwind CSS**: A utility-first CSS framework that enables custom and responsive design implementation.
- **Async Management**: Ensures smooth and efficient handling of asynchronous operations like API requests and data fetching.

---

## 4. Environment Variables

The **AI Code Productivity Booster Frontend** requires the following environment variables to be set for proper functionality and integration with backend services:

- **NEXT_PUBLIC_API_BASE_URL**: The base URL for the backend API that provides multi-agent coding assistance services.
- **NEXT_PUBLIC_API_KEY**: The API key used to authenticate requests to the backend services.

Example `.env.local` file configuration:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.codeproductivitybooster.com
NEXT_PUBLIC_API_KEY=your_api_key_here
```


Ensure you replace `your_api_key_here` with the actual API key provided by the backend.

---

## 5. Installation Guide

Follow these steps to set up and run the **AI Code Productivity Booster Frontend** locally:

1. **Clone the repository**:
   - Download the repository to your local machine using the following command:
     ```
     git clone https://github.com/yourusername/AI-Code-Productivity-Booster-Frontend.git
     ```

2. **Navigate to the project directory**:
   - Move into the project folder:
     ```
     cd AI-Code-Productivity-Booster-Frontend
     ```

3. **Install dependencies**:
   - Install the required packages using npm or yarn:
     ```
     npm install
     ```

4. **Set up environment variables**:
   - Create a `.env.local` file in the root directory of the project and configure the environment variables:
     ```
     NEXT_PUBLIC_API_BASE_URL=https://api.codeproductivitybooster.com
     NEXT_PUBLIC_API_KEY=your_api_key_here
     ```

5. **Run the development server**:
   - Start the application locally:
     ```
     npm run dev
     ```

6. **Build for production**:
   - To build the application for production deployment:
     ```
     npm run build
     ```

7. **Deploy**:
   - The project is deployed on **Vercel**. For custom deployment, push your code to a repository connected to Vercel or follow Vercel’s deployment instructions.

---

## 6. How to Use

Once the **AI Code Productivity Booster Frontend** is set up, you can use its multi-agent services as follows:

1. **Refactoring Assistant**:
   - Input your code and use the Refactoring Assistant to simplify and optimize your code structure.

2. **Documentation Generator Assistant**:
   - Use this service to automatically generate function-level, class-level, or module-level documentation for your codebase.

3. **Multi-Agent Debugging Assistant**:
   - Detect errors and receive suggestions for fixing bugs in your code with the Debugging Assistant.

4. **LLM Application Development Assistant**:
   - Get assistance in developing and optimizing applications that leverage large language models (LLMs) for various AI-driven tasks.

Throughout the process, you will receive real-time feedback and notifications via **react-toastify**, ensuring you are kept informed of the progress of each task.
