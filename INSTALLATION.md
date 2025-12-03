# 📦 Installation Guide - Lucky Spin Wheel

This guide will walk you through the installation process step by step.

## Table of Contents

- [System Requirements](#system-requirements)
- [Quick Installation](#quick-installation)
- [Detailed Installation Steps](#detailed-installation-steps)
- [Verification](#verification)
- [Common Installation Issues](#common-installation-issues)
- [Next Steps](#next-steps)

---

## System Requirements

Before you begin, ensure your system meets these requirements:

### Required Software

| Software | Minimum Version | Recommended Version | Download Link |
|----------|----------------|---------------------|---------------|
| Node.js | 18.0.0 | 22.14.0 | [nodejs.org](https://nodejs.org/) |
| npm | 9.0.0 | 10.0.0+ | Included with Node.js |
| Git | 2.0.0 | Latest | [git-scm.com](https://git-scm.com/) |

### Optional Software

| Software | Purpose | Download Link |
|----------|---------|---------------|
| Docker | Container deployment | [docker.com](https://www.docker.com/) |
| VS Code | Code editor | [code.visualstudio.com](https://code.visualstudio.com/) |
| Yarn | Alternative package manager | [yarnpkg.com](https://yarnpkg.com/) |

### System Specifications

- **Operating System:** Windows 10+, macOS 10.15+, or Linux
- **RAM:** Minimum 4GB (8GB recommended)
- **Disk Space:** 500MB free space
- **Internet Connection:** Required for initial setup

---

## Quick Installation

For experienced developers who want to get started quickly:

```bash
# 1. Extract the downloaded package
unzip lucky-spin-wheel.zip
cd vong-quay-may-man

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173
```

That's it! Skip to [Verification](#verification) to confirm everything works.

---

## Detailed Installation Steps

### Step 1: Download and Extract

1. **Download the package** from ThemeForest
   - Log in to your ThemeForest account
   - Navigate to your downloads
   - Download "Lucky Spin Wheel"

2. **Extract the ZIP file**
   
   **On Windows:**
   - Right-click the ZIP file
   - Select "Extract All..."
   - Choose your destination folder
   
   **On macOS:**
   - Double-click the ZIP file
   - It will extract automatically
   
   **On Linux:**
   ```bash
   unzip lucky-spin-wheel.zip -d ~/projects/
   ```

3. **Navigate to the project folder**
   ```bash
   cd path/to/vong-quay-may-man
   ```

### Step 2: Install Node.js and npm

If you haven't installed Node.js yet:

#### Windows

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer
4. Follow the installation wizard
5. Restart your computer

#### macOS

**Using Homebrew (recommended):**
```bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Using the installer:**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the macOS installer
3. Run the .pkg file
4. Follow the installation wizard

#### Linux (Ubuntu/Debian)

```bash
# Update package list
sudo apt update

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 3: Verify Node.js Installation

Open a terminal/command prompt and run:

```bash
node --version
# Should output: v22.14.0 or similar

npm --version
# Should output: 10.x.x or similar
```

If you see version numbers, Node.js is installed correctly!

### Step 4: Install Project Dependencies

Navigate to the project folder and install dependencies:

```bash
# Navigate to project
cd vong-quay-may-man

# Install all dependencies
npm install
```

**What happens during installation:**
- npm reads `package.json`
- Downloads all required packages
- Installs them in `node_modules/` folder
- Creates `package-lock.json` for version locking

**Expected output:**
```
added 234 packages, and audited 235 packages in 45s

89 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

**This process takes 1-3 minutes** depending on your internet speed.

### Step 5: Start Development Server

After installation completes, start the development server:

```bash
npm run dev
```

**Expected output:**
```
  VITE v7.2.4  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 6: Open in Browser

1. Open your web browser
2. Navigate to: `http://localhost:5173`
3. You should see all 4 spin wheel games!

---

## Verification

### Visual Verification

When you open `http://localhost:5173`, you should see:

✅ Four spin wheel games displayed in a grid layout  
✅ Each game has a colorful background  
✅ Spin buttons are visible in the center of each wheel  
✅ The page is responsive (try resizing your browser)

### Functional Verification

Test each game:

1. **Click the spin button** on Game 1
2. The wheel should **spin smoothly**
3. After 2-3 seconds, it should **stop on a prize**
4. An **alert message** should appear showing the prize
5. Repeat for Games 2, 3, and 4

### Console Verification

Open browser DevTools (F12) and check:

✅ No red error messages in the Console  
✅ All images load successfully  
✅ No 404 (Not Found) errors in the Network tab

---

## Common Installation Issues

### Issue 1: `npm: command not found`

**Problem:** Node.js/npm is not installed or not in PATH

**Solution:**
```bash
# Verify Node.js installation
which node
which npm

# If not found, reinstall Node.js
# See Step 2 above
```

### Issue 2: `npm ERR! code EACCES`

**Problem:** Permission denied error

**Solution (Linux/macOS):**
```bash
# Change npm's default directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile

# Try installation again
npm install
```

**Solution (Windows):**
- Run Command Prompt as Administrator
- Navigate to project folder
- Run `npm install`

### Issue 3: `npm ERR! network`

**Problem:** Network/firewall issues

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try with increased timeout
npm install --timeout=60000

# Use different registry (if in China)
npm install --registry=https://registry.npmmirror.com
```

### Issue 4: Port 5173 Already in Use

**Problem:** Another application is using port 5173

**Solution:**
```bash
# Kill the process using port 5173
# On macOS/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or use a different port
npm run dev -- --port 3000
```

### Issue 5: Images Not Loading

**Problem:** 404 errors for images

**Solution:**
```bash
# Verify public folder exists
ls -la public/game1/
ls -la public/game2/
ls -la public/game3/
ls -la public/game4/

# If images are missing, re-extract the ZIP file
# Ensure you extracted ALL files, not just src/
```

### Issue 6: TypeScript Errors

**Problem:** TS errors during development

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check TypeScript version
npx tsc --version

# If outdated, update
npm install typescript@latest
```

### Issue 7: Slow Installation

**Problem:** npm install takes too long

**Solution:**
```bash
# Try using Yarn instead (faster)
npm install -g yarn
yarn install

# Or use npm with parallel downloads
npm install --prefer-offline --no-audit
```

---

## Next Steps

### Development

After successful installation:

1. **Explore the code**
   - Open `src/App.tsx` to see the main component
   - Check `src/components/game-1/Game1Config.ts` for configuration
   - Review `DOCUMENTATION.md` for detailed guides

2. **Customize your first game**
   ```bash
   # Edit prize configuration
   code src/components/game-1/Game1Config.ts
   ```

3. **Add your own images**
   - Place images in `public/game1/`
   - Update configuration to reference them

### Production Build

When ready to deploy:

```bash
# Create production build
npm run build

# Test production build locally
npm run preview

# Deploy the dist/ folder to your server
```

### Docker Deployment

If you want to use Docker:

```bash
# Build Docker image
docker build -t lucky-spin-wheel .

# Run container
docker run -p 80:80 lucky-spin-wheel

# Access at http://localhost
```

---

## Additional Resources

### Recommended VS Code Extensions

Install these extensions for the best development experience:

1. **ESLint** - JavaScript linting
2. **Prettier** - Code formatting
3. **Tailwind CSS IntelliSense** - CSS autocomplete
4. **TypeScript Vue Plugin (Volar)** - Better TS support

```bash
# Install from VS Code or via command line
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
```

### Learning Resources

- **React Basics:** [react.dev/learn](https://react.dev/learn)
- **TypeScript Tutorial:** [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)
- **Vite Guide:** [vite.dev/guide](https://vite.dev/guide/)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

### Getting Help

If you're stuck:

1. **Check Documentation:** See `DOCUMENTATION.md` for detailed guides
2. **Review Troubleshooting:** Common issues are documented above
3. **Contact Support:** Email your-email@example.com
4. **Include these details:**
   - Operating system and version
   - Node.js and npm versions (`node --version`, `npm --version`)
   - Error messages (copy/paste full error)
   - Steps you've already tried

---

## Installation Checklist

Use this checklist to ensure everything is set up correctly:

- [ ] Node.js 18+ installed
- [ ] npm installed and working
- [ ] Project files extracted
- [ ] Navigated to project directory
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Opened http://localhost:5173
- [ ] All 4 games visible
- [ ] Spin buttons work correctly
- [ ] No console errors
- [ ] Images loading correctly

**All checked?** Congratulations! You're ready to start customizing! 🎉

---

## Quick Reference Commands

```bash
# Installation
npm install                    # Install dependencies
npm install --legacy-peer-deps # If you have dependency conflicts

# Development
npm run dev                    # Start dev server
npm run dev -- --port 3000    # Use different port
npm run dev -- --host         # Expose to network

# Building
npm run build                  # Create production build
npm run preview               # Preview production build

# Code Quality
npm run lint                   # Run ESLint

# Cleaning
rm -rf node_modules           # Remove dependencies
rm -rf dist                   # Remove build output
npm cache clean --force       # Clear npm cache
```

---

**Installation Complete! 🚀**

Continue to [DOCUMENTATION.md](./DOCUMENTATION.md) for customization guides and advanced features.

Need help? Contact: your-email@example.com
