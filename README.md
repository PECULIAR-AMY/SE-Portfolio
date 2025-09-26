# Amaka Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Hero section with animated introduction
- About section
- Projects showcase
- Blog
- CV download
- Contact form
- AI Chatbot for interactive experience
- Responsive design

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ShadCN UI components
- React Router DOM
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amaka-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified in vite.config.ts).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # ShadCN UI components
│   ├── Hero.tsx     # Hero section
│   ├── About.tsx    # About section
│   ├── Projects.tsx # Projects showcase
│   ├── Blog.tsx     # Blog section
│   ├── Contact.tsx  # Contact form
│   ├── CV.tsx       # CV component
│   ├── Footer.tsx   # Footer
│   └── Navigation.tsx # Navigation bar
├── pages/
│   ├── Index.tsx    # Main page
│   └── NotFound.tsx # 404 page
├── hooks/           # Custom hooks
├── lib/             # Utilities
└── assets/          # Images and assets
```

## Deployment

This project can be deployed to various platforms:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is private.
