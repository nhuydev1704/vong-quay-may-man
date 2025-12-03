# 🚀 Deployment Guide

Complete guide for deploying Lucky Spin Wheel to various hosting platforms.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Building for Production](#building-for-production)
- [Deployment Platforms](#deployment-platforms)
  - [Netlify (Easiest)](#netlify)
  - [Vercel](#vercel)
  - [AWS S3 + CloudFront](#aws-s3--cloudfront)
  - [Docker Deployment](#docker-deployment)
  - [Traditional Web Server](#traditional-web-server)
  - [GitHub Pages](#github-pages)
  - [Azure Static Web Apps](#azure-static-web-apps)
  - [Google Cloud Storage](#google-cloud-storage)
- [Environment Configuration](#environment-configuration)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting Deployment](#troubleshooting-deployment)

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All customizations are complete
- [ ] Images are optimized (< 100KB each)
- [ ] Application tested locally
- [ ] No console errors in browser
- [ ] Responsive design tested on mobile
- [ ] All links and assets working
- [ ] Custom domain ready (optional)
- [ ] SSL certificate available (recommended)

---

## Building for Production

### Step 1: Build the Application

```bash
# Create optimized production build
npm run build

# Or with Yarn
yarn build
```

**Output:** The `dist/` folder contains your production files.

### Step 2: Test Production Build Locally

```bash
# Preview production build
npm run preview

# Or with Yarn
yarn preview
```

Visit `http://localhost:4173` to test.

### Step 3: Verify Build Output

Check the `dist/` folder contains:
- `index.html`
- `assets/` folder with JS and CSS files
- `game1/`, `game2/`, `game3/`, `game4/` folders with images

---

## Deployment Platforms

### Netlify

**Difficulty:** ⭐ Easiest  
**Cost:** Free tier available  
**Best for:** Quick deployments, automatic CI/CD

#### Method 1: Drag & Drop (Easiest)

1. Build your project: `npm run build`
2. Visit [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder to the upload area
4. Done! Your site is live.

#### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

#### Method 3: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect repository on Netlify
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy automatically on every push

#### Configuration File

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "22"
```

---

### Vercel

**Difficulty:** ⭐ Easy  
**Cost:** Free tier available  
**Best for:** Next-gen deployments, edge functions

#### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Method 2: Git Integration

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Click "Deploy"

#### Configuration File

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

### AWS S3 + CloudFront

**Difficulty:** ⭐⭐⭐ Advanced  
**Cost:** Pay as you go (~$0.50-5/month)  
**Best for:** Scalable, enterprise deployments

#### Step 1: Create S3 Bucket

```bash
# Install AWS CLI
brew install awscli  # macOS
# or download from aws.amazon.com/cli

# Configure AWS credentials
aws configure

# Create bucket
aws s3 mb s3://your-lucky-wheel-app --region us-east-1
```

#### Step 2: Build and Upload

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-lucky-wheel-app --delete

# Enable website hosting
aws s3 website s3://your-lucky-wheel-app \
  --index-document index.html \
  --error-document index.html
```

#### Step 3: Configure Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-lucky-wheel-app/*"
    }
  ]
}
```

Apply policy:
```bash
aws s3api put-bucket-policy \
  --bucket your-lucky-wheel-app \
  --policy file://bucket-policy.json
```

#### Step 4: Set Up CloudFront (Optional but Recommended)

1. Go to CloudFront in AWS Console
2. Create Distribution
3. Set Origin to your S3 bucket
4. Configure SSL certificate
5. Set default root object to `index.html`
6. Configure custom error pages:
   - 403 → /index.html
   - 404 → /index.html

---

### Docker Deployment

**Difficulty:** ⭐⭐ Moderate  
**Cost:** Varies by hosting  
**Best for:** Containerized environments, Kubernetes

#### Using Provided Dockerfile

```bash
# Build image
docker build -t lucky-spin-wheel:latest .

# Run locally to test
docker run -p 80:80 lucky-spin-wheel:latest

# Test at http://localhost
```

#### Push to Docker Hub

```bash
# Tag image
docker tag lucky-spin-wheel:latest yourusername/lucky-spin-wheel:latest

# Login to Docker Hub
docker login

# Push
docker push yourusername/lucky-spin-wheel:latest
```

#### Deploy to Cloud

**AWS ECS:**
```bash
# Push to ECR
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin \
  your-account-id.dkr.ecr.us-east-1.amazonaws.com

docker tag lucky-spin-wheel:latest \
  your-account-id.dkr.ecr.us-east-1.amazonaws.com/lucky-spin-wheel:latest

docker push your-account-id.dkr.ecr.us-east-1.amazonaws.com/lucky-spin-wheel:latest
```

**Google Cloud Run:**
```bash
# Build and push
gcloud builds submit --tag gcr.io/your-project/lucky-spin-wheel

# Deploy
gcloud run deploy lucky-spin-wheel \
  --image gcr.io/your-project/lucky-spin-wheel \
  --platform managed \
  --allow-unauthenticated
```

#### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

Deploy:
```bash
docker-compose up -d
```

---

### Traditional Web Server

**Difficulty:** ⭐⭐ Moderate  
**Cost:** Varies by hosting  
**Best for:** Shared hosting, VPS, dedicated servers

#### Apache

1. Build the project: `npm run build`
2. Upload `dist/` contents to your server:
   ```bash
   scp -r dist/* user@yourserver.com:/var/www/html/
   ```

3. Create `.htaccess` in the root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

#### Nginx

1. Build and upload files
2. Configure Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/lucky-spin-wheel;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Restart Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

### GitHub Pages

**Difficulty:** ⭐⭐ Moderate  
**Cost:** Free  
**Best for:** Open source projects, demos

#### Step 1: Install gh-pages

```bash
npm install -D gh-pages
```

#### Step 2: Update package.json

```json
{
  "homepage": "https://yourusername.github.io/lucky-spin-wheel",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 3: Deploy

```bash
npm run deploy
```

Your site will be live at `https://yourusername.github.io/lucky-spin-wheel`

#### Custom Domain

1. Add `CNAME` file to `public/` folder:
   ```
   yourdomain.com
   ```
2. Configure DNS:
   - Add A records pointing to GitHub Pages IPs
   - Or CNAME record pointing to `yourusername.github.io`

---

### Azure Static Web Apps

**Difficulty:** ⭐⭐ Moderate  
**Cost:** Free tier available  
**Best for:** Enterprise, Microsoft ecosystem

#### Using Azure CLI

```bash
# Install Azure CLI
brew install azure-cli  # macOS

# Login
az login

# Create resource group
az group create --name lucky-spin-rg --location eastus

# Deploy
az staticwebapp create \
  --name lucky-spin-wheel \
  --resource-group lucky-spin-rg \
  --source https://github.com/yourusername/lucky-spin-wheel \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

---

### Google Cloud Storage

**Difficulty:** ⭐⭐ Moderate  
**Cost:** Pay as you go (~$0.50-5/month)  
**Best for:** Google Cloud ecosystem

#### Step 1: Create Bucket

```bash
# Install gcloud CLI
brew install google-cloud-sdk  # macOS

# Login
gcloud auth login

# Create bucket
gsutil mb -c STANDARD -l US gs://your-lucky-wheel-app
```

#### Step 2: Build and Upload

```bash
# Build
npm run build

# Upload
gsutil -m cp -r dist/* gs://your-lucky-wheel-app/

# Make public
gsutil iam ch allUsers:objectViewer gs://your-lucky-wheel-app
```

#### Step 3: Configure as Website

```bash
gsutil web set -m index.html -e index.html gs://your-lucky-wheel-app
```

Your site is live at: `https://storage.googleapis.com/your-lucky-wheel-app/index.html`

---

## Environment Configuration

### Environment Variables

Create `.env.production`:

```bash
VITE_API_URL=https://api.yourdomain.com
VITE_GA_ID=G-XXXXXXXXXX
VITE_APP_NAME=Lucky Spin Wheel
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Different Environments

**Staging:**
```bash
# Build for staging
npm run build -- --mode staging
```

**Production:**
```bash
# Build for production
npm run build -- --mode production
```

---

## Performance Optimization

### 1. Image Optimization

```bash
# Install image optimizer
npm install -g imagemin-cli

# Optimize images
imagemin public/game*/*.{png,jpg} --out-dir=public-optimized/
```

### 2. Enable Compression

**Nginx:**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

**Apache:**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript
</IfModule>
```

### 3. CDN Configuration

Use a CDN for assets:
- Cloudflare (free)
- AWS CloudFront
- Google Cloud CDN
- Fastly

### 4. Caching Headers

```nginx
location ~* \.(jpg|jpeg|png|gif|ico)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

location ~* \.(css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

---

## Troubleshooting Deployment

### Issue: 404 on Page Refresh

**Problem:** React Router needs all routes to serve `index.html`

**Solution:** Configure server redirects (see platform-specific sections above)

### Issue: Images Not Loading

**Problem:** Wrong paths in production

**Solution:**
1. Ensure images are in `public/` folder
2. Use absolute paths: `/game1/image.png`
3. Check `base` in `vite.config.ts`

### Issue: Blank Page After Deployment

**Check:**
1. Browser console for errors
2. Correct `base` path in Vite config
3. All assets uploaded
4. MIME types configured correctly

### Issue: Large Bundle Size

**Solutions:**
1. Analyze bundle: `npm run build -- --analyze`
2. Remove unused dependencies
3. Use dynamic imports for code splitting
4. Optimize images

---

## Post-Deployment

### Monitoring

Set up monitoring:
- **Uptime:** Pingdom, UptimeRobot
- **Analytics:** Google Analytics, Plausible
- **Errors:** Sentry, LogRocket
- **Performance:** Lighthouse, WebPageTest

### SSL Certificate

Ensure HTTPS is enabled:
- Most platforms provide free SSL (Let's Encrypt)
- Configure automatic renewal
- Redirect HTTP to HTTPS

### Custom Domain

1. Purchase domain (Namecheap, GoDaddy, Google Domains)
2. Configure DNS:
   - For Netlify/Vercel: Add their nameservers
   - For S3/GCS: Add CNAME record
3. Enable SSL on your domain

### Backup Strategy

Regular backups:
```bash
# Backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
tar -czf backup-$DATE.tar.gz dist/
aws s3 cp backup-$DATE.tar.gz s3://backups/lucky-spin/
```

---

## Deployment Comparison

| Platform | Difficulty | Cost | SSL | CDN | Best For |
|----------|-----------|------|-----|-----|----------|
| Netlify | ⭐ Easy | Free tier | ✅ Free | ✅ Included | Quick deployments |
| Vercel | ⭐ Easy | Free tier | ✅ Free | ✅ Included | Modern apps |
| GitHub Pages | ⭐⭐ Moderate | Free | ✅ Free | ❌ No | Open source |
| AWS S3 | ⭐⭐⭐ Hard | $0.50-5/mo | ❌ Extra | ✅ Extra | Enterprise |
| Docker | ⭐⭐ Moderate | Varies | Depends | Depends | Containerized |
| VPS | ⭐⭐⭐ Hard | $5-20/mo | ✅ Let's Encrypt | ❌ No | Full control |

---

## Support

Need deployment help?

📧 **Email:** your-email@example.com  
📚 **Documentation:** [DOCUMENTATION.md](./DOCUMENTATION.md)  
❓ **FAQ:** [FAQ.md](./FAQ.md)

---

**Version:** 1.0.0  
**Last Updated:** December 2025
