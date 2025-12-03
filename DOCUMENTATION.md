# 📚 Lucky Spin Wheel - Complete Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation & Setup](#installation--setup)
3. [Project Architecture](#project-architecture)
4. [Configuration Guide](#configuration-guide)
5. [Customization](#customization)
6. [Deployment](#deployment)
7. [API Reference](#api-reference)
8. [Troubleshooting](#troubleshooting)
9. [Best Practices](#best-practices)

---

## Introduction

Lucky Spin Wheel is a professional-grade React application featuring four fully customizable spinning wheel games. Built with modern web technologies, it's perfect for marketing campaigns, promotional events, gamification, and interactive user engagement.

### What's Included

- 4 pre-configured spin wheel games
- Responsive layouts for all devices
- Customizable prize configurations
- Docker deployment support
- TypeScript type safety
- Production-ready build setup

---

## Installation & Setup

### Prerequisites

Before you begin, ensure you have:

- **Node.js** version 18.0 or higher (recommended: 22.14.0)
- **npm** (comes with Node.js) or **yarn** package manager
- A modern code editor (VS Code recommended)
- Git for version control

### Step-by-Step Installation

#### 1. Download & Extract

Download the package from ThemeForest and extract it to your desired location.

#### 2. Install Dependencies

```bash
cd vong-quay-may-man

# Using npm
npm install

# OR using yarn
yarn install
```

This will install all required dependencies:
- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.4
- Tailwind CSS 4.1.17
- @lucky-canvas/react 0.1.13

#### 3. Start Development Server

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

The application will start at `http://localhost:5173`

#### 4. Build for Production

```bash
# Using npm
npm run build

# OR using yarn
yarn build
```

The production build will be created in the `dist/` directory.

---

## Project Architecture

### Directory Structure

```
vong-quay-may-man/
│
├── public/                      # Static assets served directly
│   ├── game1/                  # Game 1 images and assets
│   ├── game2/                  # Game 2 images and assets
│   ├── game3/                  # Game 3 images and assets
│   └── game4/                  # Game 4 images and assets
│
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── game-1/
│   │   │   ├── Game1.tsx      # Game 1 component
│   │   │   └── Game1Config.ts # Game 1 configuration
│   │   ├── game-2/
│   │   │   ├── Game2.tsx      # Game 2 component
│   │   │   └── Game2Config.ts # Game 2 configuration
│   │   ├── game-3/
│   │   │   ├── Game3.tsx      # Game 3 component
│   │   │   └── Game3Config.ts # Game 3 configuration
│   │   └── game-4/
│   │       ├── Game4.tsx      # Game 4 component
│   │       └── Game4Config.ts # Game 4 configuration
│   │
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts           # Global type definitions
│   │
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
│
├── html/                       # Standalone HTML versions
│   ├── game1/
│   ├── game2/
│   ├── game3/
│   └── game4/
│
├── nginx/                      # Nginx configuration for Docker
│   └── default.conf           # Nginx server configuration
│
├── Dockerfile                  # Docker build configuration
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite bundler configuration
├── eslint.config.js           # ESLint code quality rules
└── README.md                  # Quick start guide
```

### Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI framework |
| TypeScript | 5.9.3 | Type safety |
| Vite | 7.2.4 | Build tool & dev server |
| Tailwind CSS | 4.1.17 | Styling framework |
| @lucky-canvas/react | 0.1.13 | Spin wheel engine |
| Node.js | 22+ | Runtime environment |

---

## Configuration Guide

### Game Configuration Structure

Each game has its own configuration file with three main sections:

#### 1. Blocks Configuration

Defines the wheel's visual structure:

```typescript
export const game1Blocks = [
  {
    padding: "24px",           // Outer padding
    imgs: [{
      src: "/game1/bg.png",    // Background image
      width: "100%",
      height: "100%",
    }],
  },
  {
    padding: "3px",            // Border thickness
    background: "#a70c1b",     // Border color
  },
];
```

#### 2. Prizes Configuration

Defines prize sections on the wheel:

```typescript
export const game1Prizes = [
  {
    background: "#FFCCDB",     // Section background color
    fonts: [{
      text: "Thank you",       // Prize text
      top: "14%",             // Text position
      fontColor: "#d64737",    // Text color (optional)
      fontSize: "14px",        // Text size (optional)
    }],
    imgs: [{
      src: "/game1/gift2.png", // Prize icon
      width: "35%",            // Icon width
      top: "30%",             // Icon position
    }],
    name: "Thank you",         // Internal prize name
  },
  // Add more prize sections...
];
```

#### 3. Button Configuration

Customizes the center spin button:

```typescript
export const game1Buttons = [
  {
    radius: "50px",            // Button size
    imgs: [{
      src: "/game1/btn.png",   // Button image
      width: "100%",
      top: "-120%",
    }],
  },
];
```

#### 4. Default Style

Sets global styling for the wheel:

```typescript
export const game1DefaultStyle = {
  fontColor: "#d64737",        // Default text color
  fontSize: "14px",            // Default text size
  fontWeight: "bold",          // Text weight
  lineHeight: "20px",          // Line height
};
```

### Component Structure

Each game component follows this pattern:

```typescript
import { LuckyWheel } from "@lucky-canvas/react";
import { useRef } from "react";
import { game1Blocks, game1Buttons, game1DefaultStyle, game1Prizes } from "./Game1Config";

const Game1 = () => {
  const myLucky = useRef<any>(null);

  return (
    <LuckyWheel
      ref={myLucky}
      width="400px"                    // Wheel width
      height="400px"                   // Wheel height
      blocks={game1Blocks}             // Wheel structure
      prizes={game1Prizes}             // Prize configuration
      buttons={game1Buttons}           // Button configuration
      defaultStyle={game1DefaultStyle} // Default styles
      onStart={() => {
        // Triggered when spin starts
        myLucky.current.play();
        setTimeout(() => {
          const index = (Math.random() * 6) >> 0; // Random prize selection
          myLucky.current.stop(index);
        }, 2500); // Spin duration: 2.5 seconds
      }}
      onEnd={(prize) => {
        // Triggered when spin ends
        alert("Congratulations on winning: " + prize.fonts[0].text);
      }}
    />
  );
};

export default Game1;
```

---

## Customization

### 1. Adding New Prizes

To add a new prize to a wheel:

**Step 1:** Open the game's config file (e.g., `src/components/game-1/Game1Config.ts`)

**Step 2:** Add a new object to the `prizes` array:

```typescript
export const game1Prizes = [
  // Existing prizes...
  {
    background: "#FFD700",           // Gold background
    fonts: [{
      text: "Grand Prize",
      top: "14%",
      fontColor: "#FFFFFF",
    }],
    imgs: [{
      src: "/game1/trophy.png",      // Add your image to public/game1/
      width: "40%",
      top: "30%",
    }],
    name: "Grand Prize",
  },
];
```

**Step 3:** Add your prize image to the `public/game1/` directory.

### 2. Changing Colors

#### Background Colors

Edit the `background` property in prize configuration:

```typescript
{
  background: "#FF5733", // Any valid CSS color
  // ...
}
```

#### Text Colors

Edit the `fontColor` in default style or individual prizes:

```typescript
export const game1DefaultStyle = {
  fontColor: "#000000", // Black text
  // ...
};
```

#### Border Colors

Edit the `background` in blocks configuration:

```typescript
export const game1Blocks = [
  // ...
  {
    padding: "3px",
    background: "#FF0000", // Red border
  },
];
```

### 3. Adjusting Wheel Size

Change the `width` and `height` props in the component:

```typescript
<LuckyWheel
  width="500px"   // Larger wheel
  height="500px"
  // ...
/>
```

For responsive sizing:

```typescript
<LuckyWheel
  width="90vw"    // 90% of viewport width
  height="90vw"   // Maintains square ratio
  // ...
/>
```

### 4. Customizing Spin Behavior

#### Spin Duration

Adjust the timeout in the `onStart` callback:

```typescript
onStart={() => {
  myLucky.current.play();
  setTimeout(() => {
    const index = (Math.random() * 6) >> 0;
    myLucky.current.stop(index);
  }, 5000); // 5 seconds spin
}}
```

#### Prize Selection Logic

Replace random selection with your own logic:

```typescript
onStart={() => {
  myLucky.current.play();
  setTimeout(() => {
    // Custom logic: weighted probabilities
    const weights = [0.40, 0.30, 0.15, 0.10, 0.04, 0.01];
    const random = Math.random();
    let sum = 0;
    let index = 0;
    
    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];
      if (random <= sum) {
        index = i;
        break;
      }
    }
    
    myLucky.current.stop(index);
  }, 2500);
}}
```

#### Win Callback

Customize the prize announcement:

```typescript
onEnd={(prize) => {
  // Custom modal or notification
  showCustomModal({
    title: "Congratulations!",
    message: `You won: ${prize.fonts[0].text}`,
    image: prize.imgs[0].src,
  });
  
  // Send to backend
  fetch('/api/record-prize', {
    method: 'POST',
    body: JSON.stringify({ prize: prize.name }),
  });
}}
```

### 5. Adding New Images

**Step 1:** Prepare your images
- Recommended format: PNG with transparency
- Recommended size: 200x200px for icons, 500x500px for backgrounds
- Optimize images for web (use tools like TinyPNG)

**Step 2:** Place images in the appropriate directory
```
public/game1/my-new-prize.png
```

**Step 3:** Reference in configuration
```typescript
imgs: [{
  src: "/game1/my-new-prize.png",
  width: "35%",
  top: "30%",
}]
```

### 6. Changing Background Container

Edit the `App.tsx` file to customize the game container backgrounds:

```typescript
<div
  style={{
    backgroundImage: 'url("/game1/custom-bg.jpeg")',
    backgroundSize: "cover",
    width: "100%",
    height: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // Add shadow
  }}
>
  <Game1 />
</div>
```

### 7. Typography Customization

Change fonts globally by editing `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

Then reference in game config:

```typescript
export const game1DefaultStyle = {
  fontColor: "#d64737",
  fontSize: "16px",
  fontFamily: "Roboto, sans-serif",
  fontWeight: "700",
};
```

---

## Deployment

### Option 1: Standard Web Server

After building the project, deploy the `dist/` folder to any web server.

#### Build Command
```bash
npm run build
```

#### Deploy to Common Platforms

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Traditional Server:**
```bash
# Upload dist/ folder to your server
scp -r dist/* user@yourserver.com:/var/www/html/
```

### Option 2: Docker Deployment

#### Build Docker Image

```bash
docker build -t lucky-spin-wheel:latest .
```

#### Run Container

```bash
docker run -d \
  -p 80:80 \
  --name lucky-spin \
  lucky-spin-wheel:latest
```

#### Using Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Run:
```bash
docker-compose up -d
```

### Option 3: Cloud Platform Deployment

#### AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Create an S3 bucket
3. Upload `dist/` contents to bucket
4. Configure CloudFront distribution
5. Point to S3 bucket

#### Google Cloud Storage

```bash
# Build
npm run build

# Upload to GCS
gsutil -m cp -r dist/* gs://your-bucket-name/
```

#### Azure Static Web Apps

```bash
# Install Azure CLI
npm install -g @azure/static-web-apps-cli

# Deploy
swa deploy ./dist
```

---

## API Reference

### LuckyWheel Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `width` | string | Yes | Wheel width (px, vw, %) |
| `height` | string | Yes | Wheel height (px, vh, %) |
| `blocks` | Block[] | Yes | Wheel structure configuration |
| `prizes` | Prize[] | Yes | Prize sections configuration |
| `buttons` | Button[] | Yes | Spin button configuration |
| `defaultStyle` | Style | No | Default text and styling |
| `onStart` | () => void | Yes | Callback when spin starts |
| `onEnd` | (prize) => void | Yes | Callback when spin ends |

### Type Definitions

```typescript
interface Prize {
  background: string;           // CSS color
  fonts: Font[];               // Text configuration
  imgs?: Image[];              // Image configuration
  name: string;                // Internal identifier
  range?: number;              // Custom angle range
}

interface Font {
  text: string;                // Display text
  top?: string;                // Position from top
  fontColor?: string;          // Text color
  fontSize?: string;           // Text size
  fontWeight?: string;         // Text weight
  lineHeight?: string;         // Line height
}

interface Image {
  src: string;                 // Image URL
  width?: string;              // Image width
  height?: string;             // Image height
  top?: string;                // Position from top
}

interface Block {
  padding?: string;            // Padding
  background?: string;         // Background color
  imgs?: Image[];             // Background images
}

interface Button {
  radius: string;              // Button size
  imgs: Image[];              // Button images
  pointer?: boolean;          // Show pointer
}

interface Style {
  fontColor?: string;         // Default font color
  fontSize?: string;          // Default font size
  fontWeight?: string;        // Default font weight
  lineHeight?: string;        // Default line height
  fontFamily?: string;        // Font family
}
```

### Component Methods

Access via ref:

```typescript
const myLucky = useRef<any>(null);

// Start spinning
myLucky.current.play();

// Stop at specific index
myLucky.current.stop(index);

// Get current rotation angle
const angle = myLucky.current.getAngle();
```

---

## Troubleshooting

### Common Issues & Solutions

#### 1. Images Not Displaying

**Problem:** Images don't show after deployment

**Solution:**
- Check that images are in the `public/` folder, not `src/`
- Verify image paths start with `/` (e.g., `/game1/image.png`)
- Ensure images are included in the build (`dist/` folder)
- Check browser console for 404 errors

#### 2. Wheel Not Spinning

**Problem:** Clicking the button doesn't start the spin

**Solution:**
- Check console for JavaScript errors
- Verify `onStart` callback is properly defined
- Ensure `myLucky.current.play()` is called
- Check that ref is properly connected to LuckyWheel component

#### 3. Build Errors

**Problem:** `npm run build` fails

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf dist .vite

# Try building again
npm run build
```

#### 4. TypeScript Errors

**Problem:** Type errors in development

**Solution:**
- Check `tsconfig.json` is properly configured
- Ensure all types are imported correctly
- Update TypeScript: `npm install typescript@latest`

#### 5. Styling Issues

**Problem:** Tailwind classes not working

**Solution:**
- Verify `@tailwindcss/vite` is in dependencies
- Check `vite.config.ts` includes Tailwind plugin
- Clear cache: `rm -rf .vite`

#### 6. Docker Container Won't Start

**Problem:** Docker container exits immediately

**Solution:**
```bash
# Check logs
docker logs lucky-spin

# Verify Nginx config
docker exec -it lucky-spin nginx -t

# Check if port is already in use
lsof -i :80
```

### Performance Optimization

#### Image Optimization

```bash
# Install image optimization tool
npm install -g imagemin-cli

# Optimize images
imagemin public/game1/*.png --out-dir=public/game1/
```

#### Code Splitting

Vite automatically code-splits. To manually split:

```typescript
// Lazy load games
const Game1 = lazy(() => import('./components/game-1/Game1'));
const Game2 = lazy(() => import('./components/game-2/Game2'));

// Wrap in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Game1 />
</Suspense>
```

#### Bundle Size Analysis

```bash
# Install analyzer
npm install -D rollup-plugin-visualizer

# Build with analysis
npm run build

# Check generated stats.html
```

---

## Best Practices

### 1. Code Organization

- Keep game configurations in separate files
- Use TypeScript for type safety
- Follow consistent naming conventions
- Comment complex logic

### 2. Asset Management

- Optimize images before adding them
- Use appropriate image formats (PNG for icons, JPEG for photos)
- Keep assets organized by game
- Use descriptive file names

### 3. Performance

- Limit wheel size on mobile devices
- Optimize image file sizes (< 100KB per image)
- Use CSS transforms for animations
- Lazy load off-screen games if needed

### 4. User Experience

- Provide clear instructions for users
- Add loading states during spin
- Use appropriate spin durations (2-5 seconds)
- Provide visual feedback on interactions

### 5. Security

- Implement backend validation for prize distribution
- Don't rely solely on client-side prize selection
- Validate and sanitize user inputs
- Use HTTPS in production

### 6. Accessibility

- Add ARIA labels for screen readers
- Ensure keyboard navigation works
- Provide text alternatives for images
- Use sufficient color contrast

Example:
```typescript
<LuckyWheel
  aria-label="Lucky spin wheel game"
  role="img"
  // ...
/>
```

### 7. Testing

Before deployment:
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Test different screen sizes
- Test prize distribution logic
- Test with slow network speeds

### 8. Version Control

```bash
# Ignore build artifacts
echo "dist/
node_modules/
.env.local" > .gitignore

# Commit regularly
git add .
git commit -m "feat: add new prize option"
```

---

## Additional Resources

### Useful Links

- [React Documentation](https://react.dev/)
- [@lucky-canvas/react Documentation](https://www.npmjs.com/package/@lucky-canvas/react)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Support

For technical support:
- 📧 Email: your-email@example.com
- 📖 Documentation: This file
- 🐛 Bug Reports: Include browser version, error messages, and steps to reproduce

### Credits

This project uses the following open-source libraries:
- React by Meta
- Lucky Canvas by LuckDraw
- Vite by Evan You and contributors
- Tailwind CSS by Tailwind Labs

---

**Version:** 1.0.0  
**Last Updated:** December 2025  
**License:** Envato Regular License

For more information, visit [ThemeForest](https://themeforest.net)
