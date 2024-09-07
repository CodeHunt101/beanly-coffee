const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.tsx", // or .ts/.jsx/.tsx depending on your setup
    "**/*.ts",
    "!**/*.test.tsx", // Exclude test files from coverage
    "!**/*.test.ts",
    "!.next/**/*",
    "!app/utils/**.*",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
