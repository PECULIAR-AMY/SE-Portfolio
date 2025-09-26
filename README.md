# Amaka Portfolio

A modern, responsive personal portfolio website for Chiamaka Igbokwe (Amaka), showcasing frontend development expertise with React, TypeScript, and modern web technologies. Features an interactive AI Chatbot for enhanced user engagement.

## Features

- Hero section with animated introduction and profile showcase
- About section highlighting skills and experience
- Projects showcase with detailed cards and data from JSON
- Skills showcase from structured data
- CV download functionality
- Contact form integrated with EmailJS for direct messaging
- AI Chatbot for interactive Q&A and portfolio exploration
- Responsive design optimized for all devices
- Navigation with smooth scrolling and routing

## Tech Stack

- React 18
- TypeScript 5.x
- Vite 5.x (build tool)
- Tailwind CSS 3.x
- ShadCN UI components (built on Radix UI primitives)
- React Router DOM 6.x (for client-side routing)
- Lucide React (icons)
- Recharts (for project visualizations/charts)
- EmailJS (contact form handling)
- Zod (form validation)
- Sonner (toast notifications)
- Next Themes (theme management)
- Custom hooks and utilities for mobile detection and toasts

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm (or yarn/pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PECULIAR-AMY/Amaka-Portfolio.git
   cd Amaka-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Amaka-Portfolio/
├── public/              # Static assets (e.g., favicon, robots.txt)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # ShadCN UI components (e.g., button.tsx, card.tsx)
│   │   ├── About.tsx    # About section
│   │   ├── AIChatbot.tsx # Interactive AI chatbot
│   │   ├── Contact.tsx  # Contact form
│   │   ├── Footer.tsx   # Footer component
│   │   ├── Hero.tsx     # Hero/introduction section
│   │   ├── Navigation.tsx # Navigation bar
│   │   └── Projects.tsx # Projects showcase
│   ├── data/            # JSON data files
│   │   ├── chatbot-knowledge.json # AI chatbot knowledge base
│   │   ├── projects.json # Project details
│   │   └── skills.json  # Skills data
│   ├── hooks/           # Custom React hooks
│   │   ├── use-mobile.tsx # Mobile detection hook
│   │   └── use-toast.ts # Toast hook
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # General utilities (e.g., cn for classNames)
│   ├── pages/           # Page-level components for routing
│   │   ├── Index.tsx    # Main landing page
│   │   └── NotFound.tsx # 404 error page
│   ├── assets/          # Images and media
│   │   ├── peculiar.jpg # Profile image
│   │   └── ...          # Screenshots and other assets
│   ├── App.tsx          # Root app component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # Vite TypeScript declarations
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS config
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

## Deployment

This is a static Single Page Application (SPA) built with Vite, making it easy to deploy:

- **Vercel**: Connect GitHub repo for automatic deploys.
- **Netlify**: Drag-and-drop the `dist/` folder or connect repo.
- **GitHub Pages**: Use `gh-pages` package or Actions to deploy `dist/`.
- **Any static hosting service** (e.g., Surge, Firebase Hosting): Serve the contents of `dist/`.

After building (`npm run build`), upload the `dist/` directory to your host.

## Contributing

Contributions are welcome! Please feel free to submit issues for bugs or enhancement requests. For pull requests:
1. Fork the repository.
2. Create a feature branch.
3. Make your changes and ensure the code lints (`npm run lint`).
4. Submit a pull request.

## License

This project is private and not open-source.
