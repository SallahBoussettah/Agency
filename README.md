# Agency Portfolio Template 🚀

<div align="center">
  <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" alt="Agency Portfolio Template" width="100%" />
  
  [![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-id/deploy-status)](https://app.netlify.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  ![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?logo=tailwind-css&logoColor=white)
</div>

<br>

A stunning and interactive portfolio/agency template designed to showcase creative work, services, and team members with engaging animations and smooth transitions. Perfect for creative agencies, freelancers, and designers looking to create a powerful online presence.

## ✨ Features

- 📱 **Fully Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- 🎭 **Smooth Animations** - Beautiful transitions and effects using Framer Motion and GSAP
- 🎨 **Modern UI** - Clean and professional design with Tailwind CSS
- 🔄 **Interactive Elements** - Engaging UI components and micro-interactions
- 🔒 **Type Safety** - Reliable code with TypeScript
- 🔧 **Customizable** - Easy to modify components and styling
- 📝 **Blog System** - Built-in blog layout with article pages
- 🔍 **SEO Ready** - Structured for optimal search engine visibility
- 🚀 **Performance Optimized** - Fast loading and efficient rendering

## 📋 Pages

- **Home**: Dynamic hero section, services overview, portfolio showcase, and call-to-action
- **About**: Company story, team members, mission & values
- **Portfolio/Work**: Project grid with filtering, project details with galleries
- **Services**: Service cards, process timeline, and pricing
- **Blog**: Article grid with categories and individual post pages
- **Contact**: Interactive contact form with validation

## 🛠️ Tech Stack

- ⚛️ React 18+
- 📘 TypeScript
- 🎨 Tailwind CSS 3.3.5
- 🎬 Framer Motion
- 🎮 GSAP (GreenSock Animation Platform)
- 🧭 React Router Dom
- 📝 React Hook Form
- 💅 Styled Components

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/SallahBoussettah/Agency.git
cd Agency
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```

4. Open your browser and visit `http://localhost:3000`

## 📂 Project Structure

```
├── public/                # Public assets
├── src/                   # Source files
│   ├── components/        # Reusable components
│   │   ├── about/         # About page components
│   │   ├── blog/          # Blog page components
│   │   ├── common/        # Common/shared components
│   │   ├── contact/       # Contact page components
│   │   ├── home/          # Home page components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── portfolio/     # Portfolio page components
│   │   ├── services/      # Services page components
│   │   └── ui/            # UI components (buttons, cards, etc.)
│   ├── context/           # React context providers
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog page and post pages
│   │   ├── contact/       # Contact page
│   │   ├── home/          # Home page
│   │   ├── portfolio/     # Portfolio page and detail pages
│   │   └── services/      # Services page and detail pages
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   └── index.tsx          # Entry point
├── .gitignore             # Git ignore file
├── LICENSE                # MIT License
├── netlify.toml           # Netlify configuration
├── package.json           # Package configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Customization

### Changing Colors

Edit the `tailwind.config.js` file to update the color palette:

```js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',     // Change this for primary color
        secondary: '#475569',   // Change this for secondary color
        accent: '#3b82f6',      // Change this for accent color
        dark: '#0f172a',        // Change this for dark color
        light: '#f8fafc',       // Change this for light color
      },
      // ...
    },
  },
};
```

### Adding New Pages

1. Create a new directory in `src/pages` with the page name
2. Create the page component
3. Add the route in `src/App.tsx`

## 🌐 Deployment

This template is ready to be deployed on Netlify. The repository includes a `netlify.toml` configuration file for optimal deployment settings.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SallahBoussettah/Agency)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [React Hook Form](https://react-hook-form.com/)
- [Heroicons](https://heroicons.com/)
- [Unsplash](https://unsplash.com/) (for demo images)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/SallahBoussettah">Sallah Boussettah</a></p>
</div>
