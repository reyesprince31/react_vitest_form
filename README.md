# Setting up a Vite/React app with Vitest and React Testing Library

## Introduction

This guide will walk you through the process of setting up a Vite/React app with Vitest and React Testing Library. Vitest is a Vite-native testing framework that is fast and easy to use. React Testing Library is a lightweight testing utility that makes it easy to test React components.
## Prerequisites

Before you begin, make sure you have the following installed on your system:
- Node.js
- npm or yarn


## Getting Started- 

1. Create a new Vite/React app using the following command:

```bash
   npm create-vite-app my-app --template react
```

2. Install Vitest and React Testing Library as dev dependencies:

```bash
   npm install -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

3. Go to vite.config.js and copy this

```bash
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Use JSDOM for browser-like environment
    setupFiles: "./src/tests/setup", // Optional setup file
  },
});
```

Add this above if you're using Typescript

```bash
/// <reference types="vitest" />
/// <reference types="vite/client" />
```

Optional: Create this file
setupFiles: "./src/tests/setup",
```bash
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

```

4. Update the scripts section of your package.json file to include the following

```bash
   "test": "vitest"
```

5. Run the tests using the following command

```bash
   npm run test
```
