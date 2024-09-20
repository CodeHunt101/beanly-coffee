# Beanly Coffee - Next.js Application

**Beanly Coffee** is a modern web application built with React and Next.js, offering a seamless user experience for coffee lovers to explore and create customised coffee plans. The app allows users to select their coffee preferences and set up personalised subscriptions.

## Demo

You can access the live demo of the application here:
[Live Demo](https://beanly-coffee.vercel.app/)

## Features

- **Dynamic Coffee Plan Creation**: Users can pick their preferred coffee type, frequency, and grind options.
- **Responsive Design**: Optimised for both mobile and desktop experiences.
- **High-Quality UI**: Clean and intuitive design with interactive components such as accordions and modals.
- **Next.js Server-Side Rendering (SSR)**: Fast and SEO-friendly web pages.
- **Testing with Jest**: Includes thorough unit testing with Jest and React Testing Library.
- **Accessibility**: Focused on web accessibility standards with semantic HTML and ARIA attributes.

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/codehunt101/beanly-coffee.git
cd beanly-coffee
npm install
```

### Running the Application

To run the development server, use the following command:

```bash
npm run dev
```

This will start the app locally at \`http://localhost:3000\`.

### Building the Application

To create an optimised production build, run:

```bash
npm run build
```

This will generate static and server-rendered pages under the \`.next\` folder, which can then be deployed to any hosting platform.

### Running Tests

The application uses Jest for testing. To run tests:

```bash
npm test
```

Snapshot testing is also included to ensure the UI remains consistent.

---

## Project Structure

The project follows a structured directory layout:

```plaintext
beanly-coffee/
|
│
├── /app/                       # Contains app-level pages and contexts
│   ├── /_context/              # Context for managing global state (e.g., PlanContext)
│   ├── /_utils/                # Utility functions and shared types
│   └── ...                     # Other application-specific files such as layouts, pages and sections and other tests
│
├── /__tests__/                 # Unit and component tests
│   ├── /components/            # Test files for each component
│   └── /snapshot/              # Snapshot tests
│
│── /public/                    # Static assets such as images
├── /hooks/                     # Reusable Hooks
├── /components/                # Reusable React components (e.g., Hero, NavBar, Accordion)
├── /styles/                    # Global styles
├── .eslintrc.js                # ESLint configuration
├── .prettierrc.js              # Prettier configuration
├── next.config.js              # Next.js configuration
└── tsconfig.json               # TypeScript configuration
```

## Technologies Used

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Context API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Testing

Testing is implemented using **Jest** and **React Testing Library**. Test files are located in the \`**tests**\` directory and page components and cover various components, ensuring reliability and performance.

### Running Tests

To run all tests:

```bash
npm test
```

This will execute the unit tests, including snapshot tests to ensure UI consistency.

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: \`git checkout -b feature-name\`
3. Make your changes and ensure tests are passing: \`npm test\`
4. Commit your changes: \`git commit -m 'Add new feature'\`
5. Push the branch: \`git push origin feature-name\`
6. Submit a pull request.
