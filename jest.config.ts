import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "\\.tsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};

export default config;
