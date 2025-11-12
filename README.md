# alx-project-0x00-setup

## React Genesis: Mastering Next.js Setup

Next.js project for learning React, TypeScript, and Tailwind CSS - Airbnb clone

## Project Description

This is a Next.js-based project designed to teach the fundamentals of building modern web applications using React, TypeScript, and Next.js. The application mimics core features of Airbnb's UI, including property listings with images, ratings, and interactive components.

## Learning Objectives

- Understand how to scaffold a Next.js project with TypeScript
- Learn Next.js folder structure and organization best practices
- Implement basic routing in Next.js (Pages Router)
- Create reusable React components with TypeScript
- Work with TypeScript interfaces for component props
- Manage assets and static files in Next.js
- Develop component composition understanding
- Implement responsive design with Tailwind CSS
- Set up and configure ESLint for code quality

## Requirements

- Node.js (v16 or later)
- npm or yarn
- Visual Studio Code or preferred IDE
- Next.js v13+
- TypeScript
- Tailwind CSS
- ESLint

## Setup Instructions

### Task 0: Scaffolding a Project

1. Open VS Code terminal: Terminal -> New Terminal
2. Navigate to your project directory
3. Run command:
```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

4. Select these options:
   - ESLint: Yes
   - Tailwind CSS: Yes
   - Import alias: Yes
   - /src directory: No
   - App Router: No

5. Navigate to directory:
```bash
cd alx-project-0x00
```

6. Start the application:
```bash
npm run dev -- -p 3000
```

7. Open browser: http://localhost:3000

### Task 1: Setting up Project Directories

1. Create directories:
```bash
mkdir components interfaces
```

2. Modify pages/index.tsx to use arrow function

3. Create empty files:
```bash
touch interfaces/index.ts components/Card.tsx components/Pill.tsx
```

### Task 2: Basic Routing

Create page files:
```bash
touch pages/landing.tsx pages/about.tsx
```

Test routes at:
- http://localhost:3000/landing
- http://localhost:3000/about

### Task 3-5: Components & TypeScript

- Download images and place in public/assets/images/
- Create Card and Pill components
- Add TypeScript interfaces
- Use components in pages

### Task 6: Advanced Button Component

Create reusable Button with multiple variants:
- Sizes: small, medium, large
- Shapes: rounded-sm, rounded-md, rounded-full

## Project Structure

```
alx-project-0x00/
├── components/
│   ├── Card.tsx
│   ├── Pill.tsx
│   └── Button.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── landing.tsx
│   └── about.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
├── .eslintrc.json
├── next.config.js
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Best Practices

- Components in dedicated components directory
- TypeScript interfaces centralized
- Arrow function syntax used consistently
- Tailwind CSS for utility-first styling
- ESLint configured for code consistency
- Next.js Image component for optimized images

## Available Scripts

```bash
# Start development server
npm run dev -- -p 3000

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Getting Started

1. Clone this repository
2. Follow Task 0 instructions to scaffold the project
3. Complete each task in order
4. Test your work at each step
5. Push your changes to GitHub

## Important Notes

- Type code yourself for better learning
- Test after each task completion
- Follow best practices consistently
- Request manual QA review when complete

## Author

jj-tech-ranger

## Repository

GitHub: alx-project-0x00-setup

Directory: alx-project-0x00

---

**Learning Tip**: Hands-on practice leads to deeper understanding. Take time with each concept!
