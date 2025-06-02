# Dynamic Form Generator

![React](https://img.shields.io/badge/react-19.1.0-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-4.9.5-blue.svg)
![Jest](https://img.shields.io/badge/tested%20with-jest-99424f.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A lightweight and extensible **dynamic form builder** built with **React + TypeScript**. It renders fully functional forms based on a JSON configuration and demonstrates modular architecture, clean code, and testability — all without relying on heavy form libraries.

---

## Features

-  **Dynamic rendering** of forms from JSON
-  Supports multiple input types:
  - Number
  - Text (single-line & multi-line)
  - Boolean (checkbox)
  - Date
  - Enum (radio buttons)
-  Clean and responsive layout
-  Unit tests using **Jest + React Testing Library**
-  Easily extendable to add validation or new field types

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```
### 2. Run the App

```bash
npm start
```
Then open your browser at: http://localhost:3000

### 3. Run Tests

```bash
npm test
```

### Example JSON Configuration
Paste this in the Config tab of your UI:
```bash
{
  "title": "User Feedback",
  "items": [
    { "label": "Count", "type": "number" },
    { "label": "Is Editable", "type": "boolean" },
    { "label": "Caption", "type": "string" },
    { "label": "Description", "type": "multi-line" },
    { "label": "Birthday", "type": "date" },
    { "label": "Gender", "type": "enum", "options": ["Male", "Female", "Other"] }
  ],
  "buttons": [
    { "label": "Cancel" },
    { "label": "Save" }
  ]
}
```

### Project Structure
```bash
src/
├── components/          # React components like FormRenderer, FormField
├── types/               # TypeScript interfaces and shared types
├── App.tsx              # Root component
├── index.tsx            # App entry point
├── setupTests.ts        # Test environment setup
└── __tests__/           # (optional) Unit tests for components
```