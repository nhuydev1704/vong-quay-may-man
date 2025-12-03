# 🚀 Quick Start Guide

Get up and running with Lucky Spin Wheel in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([Download here](https://nodejs.org/))
- Basic command line knowledge
- A text editor (VS Code recommended)

## Installation (2 minutes)

```bash
# 1. Navigate to the project folder
cd vong-quay-may-man

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

✅ Open http://localhost:5173 in your browser!

## First Customization (3 minutes)

### Change Prize Text

1. Open `src/components/game-1/Game1Config.ts`
2. Find the `game1Prizes` array
3. Edit the prize text:

```typescript
{
  background: "#FFCCDB",
  fonts: [
    { text: "Your Custom Prize!", top: "14%" }  // Change this
  ],
  // ...
}
```

4. Save the file - changes appear instantly!

### Add Your Own Image

1. Place your image in `public/game1/`
2. Update the config:

```typescript
{
  imgs: [
    { src: "/game1/your-image.png", width: "35%", top: "30%" }
  ],
}
```

3. Refresh the browser!

## Common Tasks

### Change Colors

```typescript
// In Game1Config.ts
{
  background: "#FF5733",  // Prize section color
  fontColor: "#FFFFFF",   // Text color
}
```

### Adjust Spin Duration

```typescript
// In Game1.tsx
setTimeout(() => {
  myLucky.current.stop(index);
}, 3000); // Change to 3 seconds (from 2500ms)
```

### Change Wheel Size

```typescript
// In Game1.tsx
<LuckyWheel
  width="500px"   // Make it bigger
  height="500px"
  // ...
/>
```

## Build for Production

```bash
npm run build
```

The `dist/` folder contains your production-ready files!

## Next Steps

- 📖 Read [DOCUMENTATION.md](./DOCUMENTATION.md) for detailed guides
- ❓ Check [FAQ.md](./FAQ.md) for common questions
- 🔧 Explore [INSTALLATION.md](./INSTALLATION.md) for advanced setup

## Need Help?

- Email: your-email@example.com
- Full Documentation: [DOCUMENTATION.md](./DOCUMENTATION.md)

---

**That's it! You're ready to create amazing spin wheels! 🎡**
