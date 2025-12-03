# 🎡 Lucky Spin Wheel - Interactive Prize Wheel Collection

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Regular%20License-green.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)

A premium, fully customizable collection of 4 interactive lucky spin wheels built with React, TypeScript, and modern web technologies. Perfect for promotional campaigns, events, games, and interactive marketing experiences.

## 🎯 Features

### ✨ Core Features
- **4 Unique Spin Wheel Games** - Each with distinct visual styles and animations
- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by @lucky-canvas/react for butter-smooth spinning
- **Customizable Prizes** - Easy configuration for prizes, colors, images, and text
- **Modern Tech Stack** - Built with React 19, TypeScript, Vite, and Tailwind CSS
- **Production Ready** - Includes Docker support for easy deployment
- **Well Documented** - Comprehensive documentation with examples

### 🎨 Game Variants
1. **Game 1** - Classic wheel with gift rewards
2. **Game 2** - Custom styled wheel with unique theme
3. **Game 3** - Special design for events
4. **Game 4** - Premium wheel variant

### 🛠️ Technical Highlights
- ⚡ Vite for lightning-fast development
- 🎨 Tailwind CSS v4 for modern styling
- 📱 Mobile-first responsive design
- 🐳 Docker containerization ready
- 🔧 TypeScript for type safety
- 🎯 ESLint configured for code quality

## 📋 Requirements

- Node.js 18+ or 22+
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vong-quay-may-man.git

# Navigate to project directory
cd vong-quay-may-man

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to see the application.

### Build for Production

```bash
# Build the project
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

## 🐳 Docker Deployment

```bash
# Build Docker image
docker build -t lucky-spin-wheel .

# Run container
docker run -p 80:80 lucky-spin-wheel
```

## 📁 Project Structure

```
vong-quay-may-man/
├── src/
│   ├── components/
│   │   ├── game-1/         # Game 1 component and config
│   │   ├── game-2/         # Game 2 component and config
│   │   ├── game-3/         # Game 3 component and config
│   │   └── game-4/         # Game 4 component and config
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets for each game
├── html/                   # Standalone HTML versions
├── Dockerfile              # Docker configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Changing Prize Items

Edit the prize configuration in each game's config file:

```typescript
// src/components/game-1/Game1Config.ts
export const game1Prizes = [
  {
    background: "#FFCCDB",
    fonts: [{ text: "Your Prize", top: "14%" }],
    imgs: [{ src: "/game1/gift.png", width: "35%", top: "30%" }],
    name: "Prize Name",
  },
  // Add more prizes...
];
```

### Customizing Colors and Styles

Modify the default style configuration:

```typescript
export const game1DefaultStyle = {
  fontColor: "#d64737",
  fontSize: "14px",
  // Customize more styles...
};
```

### Adding Custom Images

1. Place your images in the `public/game[1-4]/` directory
2. Reference them in the configuration files
3. Recommended image formats: PNG, JPEG

## 📖 Documentation

For detailed documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md)

## 🔄 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

## 📄 License

This project is licensed under the Envato Regular License - see [LICENSE](./LICENSE) for details.

## 🤝 Support

For support and inquiries:
- 📧 Email: your-email@example.com
- 💬 Documentation: [Full Documentation](./DOCUMENTATION.md)
- 🐛 Bug Reports: Create an issue on GitHub

## ⭐ Credits

- Built with [React](https://react.dev/)
- Spin wheel powered by [@lucky-canvas/react](https://www.npmjs.com/package/@lucky-canvas/react)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 🎉 Features Coming Soon

- [ ] Sound effects integration
- [ ] Animation customization panel
- [ ] Prize probability configuration
- [ ] Analytics integration
- [ ] Multi-language support

---

**Made with ❤️ for ThemeForest**

If you like this project, please rate it ⭐⭐⭐⭐⭐
