# ❓ Frequently Asked Questions (FAQ)

## Table of Contents

- [General Questions](#general-questions)
- [Installation & Setup](#installation--setup)
- [Customization](#customization)
- [Technical Questions](#technical-questions)
- [Licensing & Usage](#licensing--usage)
- [Deployment & Hosting](#deployment--hosting)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

---

## General Questions

### What is Lucky Spin Wheel?

Lucky Spin Wheel is a premium React application featuring 4 fully customizable spinning wheel games. It's perfect for promotional campaigns, events, gamification, and interactive marketing.

### What's included in the package?

- 4 pre-configured spin wheel games
- Full source code (React + TypeScript)
- All assets (images, backgrounds)
- Complete documentation
- Docker deployment configuration
- Production-ready build setup

### Do I need coding knowledge to use this?

Basic knowledge is helpful but not required:
- **No coding needed:** Use the games as-is
- **Basic customization:** Edit configuration files (easy!)
- **Advanced customization:** React/TypeScript knowledge recommended

### What can I build with this?

- Marketing campaign wheels
- E-commerce prize wheels
- Event games and giveaways
- Website gamification
- Mobile-responsive web games
- Interactive promotional tools

### Is this mobile-friendly?

Yes! The application is fully responsive and works perfectly on:
- 📱 Mobile phones (iOS & Android)
- 💻 Tablets (iPad, Android tablets)
- 🖥️ Desktop computers
- All modern browsers (Chrome, Firefox, Safari, Edge)

---

## Installation & Setup

### What are the system requirements?

- **Node.js:** 18.0 or higher (22.14 recommended)
- **npm or yarn:** Latest version
- **Modern browser:** Chrome, Firefox, Safari, or Edge
- **Operating System:** Windows, macOS, or Linux

See [INSTALLATION.md](./INSTALLATION.md) for detailed requirements.

### How long does installation take?

- **Download & extract:** 1-2 minutes
- **Install dependencies:** 2-3 minutes
- **First run:** Instant
- **Total time:** ~5 minutes

### Can I use Yarn instead of npm?

Yes! Yarn is fully supported:

```bash
# Install dependencies
yarn install

# Start development
yarn dev

# Build for production
yarn build
```

### Do I need to install a database?

No! This is a frontend application that doesn't require a database by default. However, you can integrate with any backend if needed.

### Can I use this with my existing project?

Yes! You can:
1. Copy individual game components to your project
2. Install dependencies: `npm install @lucky-canvas/react`
3. Import and use the components

---

## Customization

### How do I change the prizes?

Edit the configuration file for each game:

```typescript
// src/components/game-1/Game1Config.ts
export const game1Prizes = [
  {
    background: "#FFCCDB",
    fonts: [{ text: "Your New Prize", top: "14%" }],
    imgs: [{ src: "/game1/your-image.png", width: "35%", top: "30%" }],
    name: "Your New Prize",
  },
];
```

See [DOCUMENTATION.md](./DOCUMENTATION.md) for detailed customization guides.

### How do I add my own images?

1. Place images in `public/game[1-4]/` folder
2. Reference them in the configuration:
   ```typescript
   imgs: [{ src: "/game1/my-image.png", width: "35%", top: "30%" }]
   ```

### Can I change the colors?

Yes! Edit colors in the configuration files:

```typescript
{
  background: "#FF5733",      // Section background
  fontColor: "#FFFFFF",       // Text color
}
```

### How do I change the wheel size?

Edit the component's width and height props:

```typescript
<LuckyWheel
  width="500px"   // Change this
  height="500px"  // And this
  // ...
/>
```

### Can I add more prizes to a wheel?

Yes! Just add more objects to the `prizes` array:

```typescript
export const game1Prizes = [
  { /* Prize 1 */ },
  { /* Prize 2 */ },
  { /* Prize 3 */ },
  { /* Prize 4 */ },
  { /* Prize 5 */ }, // New prize!
  { /* Prize 6 */ }, // Another new prize!
];
```

### How do I control prize probability?

Edit the `onStart` callback with custom logic:

```typescript
onStart={() => {
  myLucky.current.play();
  setTimeout(() => {
    // Custom probability logic
    const random = Math.random();
    let index = 0;
    
    if (random < 0.50) index = 0;      // 50% chance
    else if (random < 0.80) index = 1; // 30% chance
    else if (random < 0.95) index = 2; // 15% chance
    else index = 3;                    // 5% chance
    
    myLucky.current.stop(index);
  }, 2500);
}}
```

### Can I add sound effects?

Yes! You can add sound effects:

```typescript
onStart={() => {
  const audio = new Audio('/sounds/spin.mp3');
  audio.play();
  myLucky.current.play();
  // ...
}}
```

### How do I change the spin duration?

Adjust the timeout value:

```typescript
setTimeout(() => {
  myLucky.current.stop(index);
}, 5000); // 5 seconds (default is 2500ms)
```

---

## Technical Questions

### What technologies are used?

- **Frontend Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.17
- **Spin Engine:** @lucky-canvas/react 0.1.13

### Can I use this with Next.js?

Yes! You can integrate the components into Next.js:

1. Install dependencies in your Next.js project
2. Mark components as client-side: `'use client'`
3. Import and use the components

### Can I use this with Vue or Angular?

The current version is React-only. However:
- @lucky-canvas has a Vue version available
- You could rebuild the logic in Angular
- Or use React components within Vue/Angular

### Does this support TypeScript?

Yes! The entire codebase is written in TypeScript with full type definitions.

### Can I integrate this with a backend API?

Yes! You can integrate with any backend:

```typescript
onEnd={(prize) => {
  // Send to backend
  fetch('/api/record-win', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prizeName: prize.name,
      userId: currentUser.id,
      timestamp: Date.now(),
    }),
  });
}}
```

### How do I save user wins to a database?

Add database integration in the `onEnd` callback:

```typescript
onEnd={async (prize) => {
  await fetch('/api/save-win', {
    method: 'POST',
    body: JSON.stringify({ prize, user }),
  });
}}
```

### Can I add user authentication?

Yes! You can integrate with any auth system:
- Firebase Auth
- Auth0
- Custom JWT authentication
- OAuth providers

Example:
```typescript
const Game1 = () => {
  const { user } = useAuth(); // Your auth hook
  
  if (!user) return <LoginPrompt />;
  
  return <LuckyWheel /* ... */ />;
};
```

### Is server-side rendering (SSR) supported?

The spinning canvas requires browser APIs, so:
- ✅ Client-side rendering (CSR) - Fully supported
- ⚠️ SSR - Requires dynamic import with `ssr: false`
- ✅ Static Site Generation (SSG) - Works with proper setup

---

## Licensing & Usage

### What license does this use?

This package uses the **Envato Regular License**. See [LICENSE](./LICENSE) for full terms.

### Can I use this on multiple websites?

No, one Regular License = one end product. For multiple sites, purchase multiple licenses or an Extended License.

### Can I use this for client projects?

Yes! You can create custom implementations for clients. Each client project requires its own license.

### Can I sell products that include this?

- ✅ **Regular License:** For single end products or free distribution
- ✅ **Extended License:** Required if selling physical products or charging subscription fees

### Can I modify the code?

Yes! You have full rights to modify the code for your end product.

### Can I remove copyright notices in the code?

Yes, you can remove code comments. However, you cannot claim the original work as your own.

---

## Deployment & Hosting

### Where can I host this application?

You can host on any platform:
- ✅ Netlify (recommended)
- ✅ Vercel (recommended)
- ✅ AWS S3 + CloudFront
- ✅ Google Cloud Storage
- ✅ Azure Static Web Apps
- ✅ Traditional web servers (Apache, Nginx)
- ✅ Docker containers

### Do I need a specific server?

No! This is a static application that can be hosted anywhere:
- Static file hosting (S3, GCS, Netlify)
- CDN (CloudFront, Cloudflare)
- Traditional web servers
- Docker containers

### How do I deploy to production?

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting
3. Configure your server (if needed)

See [DOCUMENTATION.md](./DOCUMENTATION.md) for platform-specific guides.

### Can I use Docker?

Yes! A Dockerfile is included:

```bash
docker build -t lucky-spin-wheel .
docker run -p 80:80 lucky-spin-wheel
```

### What's the file size of the built application?

Approximately:
- **Initial bundle:** ~200-300 KB (gzipped)
- **With assets:** ~2-5 MB total
- **Per-game images:** ~500 KB - 1 MB each

---

## Troubleshooting

### The wheel doesn't spin when I click

**Check:**
1. Console for JavaScript errors
2. That `onStart` callback is properly defined
3. That `myLucky.current.play()` is being called
4. Browser compatibility (use modern browsers)

### Images are not loading

**Solutions:**
1. Verify images are in `public/` folder (not `src/`)
2. Check image paths start with `/` (e.g., `/game1/image.png`)
3. Ensure images exist in the build output (`dist/`)
4. Clear browser cache

### The build fails

**Try:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist .vite

# Build again
npm run build
```

### Styling doesn't work

**Check:**
1. Tailwind CSS is properly configured in `vite.config.ts`
2. `index.css` is imported in `main.tsx`
3. No conflicting CSS files
4. Browser DevTools for CSS errors

### Port 5173 is already in use

**Solution:**
```bash
# Use a different port
npm run dev -- --port 3000

# Or kill the existing process
# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### My custom images don't show up

**Check:**
1. Image is in `public/game[1-4]/` folder
2. Path in config matches: `/game1/my-image.png`
3. Image format is supported (PNG, JPG, JPEG, GIF, SVG)
4. File name spelling is correct (case-sensitive on Linux)

### TypeScript errors

**Solutions:**
```bash
# Update TypeScript
npm install typescript@latest

# Regenerate type definitions
npx tsc --noEmit

# Check tsconfig.json is correct
```

---

## Support

### How do I get support?

1. **Check Documentation:** [DOCUMENTATION.md](./DOCUMENTATION.md)
2. **Review FAQ:** This file!
3. **Installation Guide:** [INSTALLATION.md](./INSTALLATION.md)
4. **Email Support:** your-email@example.com

### What should I include in a support request?

Please provide:
- Your operating system (Windows/macOS/Linux)
- Node.js version (`node --version`)
- npm version (`npm --version`)
- Complete error message
- Steps to reproduce the issue
- Screenshots (if applicable)

### How long is support provided?

- **6 months** of support included with purchase
- Extended support available for additional fee
- Updates and bug fixes provided when available

### Can I request custom features?

Yes! Contact us for:
- Custom development
- Feature requests
- Integration assistance
- Training and consultation

### Where can I report bugs?

Email bug reports to: your-email@example.com

Include:
1. Description of the bug
2. Steps to reproduce
3. Expected vs actual behavior
4. Environment details (OS, browser, Node version)
5. Screenshots/screen recordings

### Is the source code commented?

Yes! The code includes:
- Inline comments for complex logic
- JSDoc comments for functions
- Type definitions for TypeScript
- Configuration explanations

### Can I get a refund?

Refund policy follows ThemeForest guidelines. Contact Envato support for refund requests.

---

## Performance & Optimization

### How can I improve performance?

1. **Optimize images:** Use TinyPNG or similar tools
2. **Lazy load games:** Load only visible games
3. **Reduce bundle size:** Remove unused dependencies
4. **Use CDN:** Serve assets from CDN
5. **Enable compression:** Gzip/Brotli on server

### What browsers are supported?

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer: Not supported

### Can I use this offline?

The application works offline after initial load if you:
1. Implement service workers
2. Cache assets properly
3. Configure PWA manifest

---

## Integration

### Can I integrate with Google Analytics?

Yes! Add tracking to the `onEnd` callback:

```typescript
onEnd={(prize) => {
  // Google Analytics 4
  gtag('event', 'spin_complete', {
    prize_name: prize.name,
    game_id: 'game1',
  });
}}
```

### Can I add email notifications?

Yes! Integrate with email services:

```typescript
onEnd={async (prize) => {
  await fetch('/api/send-email', {
    method: 'POST',
    body: JSON.stringify({
      to: user.email,
      prize: prize.name,
    }),
  });
}}
```

### Can I connect to WordPress?

Yes! You can:
1. Build as a standalone widget
2. Embed via iframe
3. Create a WordPress plugin wrapper
4. Use REST API integration

---

## Still Have Questions?

**📧 Email:** your-email@example.com  
**📚 Documentation:** [DOCUMENTATION.md](./DOCUMENTATION.md)  
**⚙️ Installation Guide:** [INSTALLATION.md](./INSTALLATION.md)  
**🔄 Changelog:** [CHANGELOG.md](./CHANGELOG.md)

---

**Last Updated:** December 2025  
**Version:** 1.0.0
