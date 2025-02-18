# Multi-Zone Next.js Application

This project demonstrates a Multi-Zone Next.js application architecture, consisting of two separate Next.js applications working together seamlessly:

- `app-a`: Main application (Primary Zone)
- `app-b`: Blog application (Blog Zone)

## Architecture Overview

The application uses Next.js Multi-Zones feature to separate concerns while maintaining a unified user experience:

- Main App (`app-a`): Serves the primary routes (`/`, `/about`)
- Blog App (`app-b`): Handles all blog-related functionality under `/blog/*`

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Two terminal windows (one for each app)

### Environment Setup

1. Main App (`app-a`):
```env
# .env.local
NEXT_PUBLIC_BLOG_URL=http://localhost:3001
```

2. Blog App (`app-b`):
```env
# .env.local
NEXT_PUBLIC_MAIN_APP_URL=http://localhost:3000
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CipherMindBob/next.js-multi-zone-apps.git
```

2. Install dependencies for both apps:
```bash
# In app-a directory
cd app-a
npm install

# In app-b directory
cd app-b
npm install
```

### Development

Run both applications in development mode:

```bash
# Terminal 1 - Main App (app-a)
cd app-a
npm run dev

# Terminal 2 - Blog App (app-b)
cd app-b
npm run dev -p 3001
```

Access the applications:
- Main App: http://localhost:3000
- Blog App: http://localhost:3001/blog

## Project Structure

```
├── app-a/                 # Main application
│   ├── app/
│   │   ├── page.tsx      # Home page
│   │   └── about/        # About page
│   ├── vercel.json       # Routing configuration
│   └── next.config.js
│
├── app-b/                 # Blog application
│   ├── app/
│   │   ├── page.tsx      # Blog home
│   │   └── posts/        # Blog posts
│   └── next.config.js    # Blog zone configuration
```

## Key Features

- Zone-based routing
- Independent deployment capability
- Cross-zone navigation
- Static blog post generation
- Environment-based configuration

## Detailed Deployment Guide

### Prerequisites for Deployment
- Vercel account
- GitHub repository with both apps
- Access to Vercel CLI (optional)

### Step 1: Deploy app-b (Blog Zone) First

1. Create a new project in Vercel:
   ```bash
   cd app-b
   vercel
   ```
   Or deploy via Vercel dashboard:
   - Import your repository
   - Select the `app-b` directory
   - Configure project settings

2. Configure app-b Environment Variables:
   ```env
   # app-b Production Environment Variables
   NEXT_PUBLIC_MAIN_APP_URL=https://your-main-app-url.vercel.app  # Will set after app-a deployment
   ```

3. Update Build Settings in Vercel:
   - Root Directory: `app-b`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. After deployment, note the URL (e.g., `https://app-b-gules.vercel.app`)

### Step 2: Deploy app-a (Main Zone)

1. Create a new project in Vercel:
   ```bash
   cd app-a
   vercel
   ```
   Or deploy via Vercel dashboard:
   - Import your repository
   - Select the `app-a` directory

2. Configure app-a Environment Variables:
   ```env
   # app-a Production Environment Variables
   NEXT_PUBLIC_BLOG_URL=https://app-b-gules.vercel.app  # URL from app-b deployment
   ```

3. Update Build Settings:
   - Root Directory: `app-a`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Update Cross-Zone Configuration

1. Update app-b Environment Variable:
   - Go to app-b project settings in Vercel
   - Add/update `NEXT_PUBLIC_MAIN_APP_URL` with app-a's URL

2. Verify vercel.json in app-a:
   ```json
   {
     "rewrites": [
       {
         "source": "/blog",
         "destination": "https://app-b-gules.vercel.app/blog"
       },
       {
         "source": "/blog/:path*",
         "destination": "https://app-b-gules.vercel.app/blog/:path*"
       }
     ]
   }
   ```

### Environment Variables Reference

#### app-a (Main Zone)
```env
# Development (.env.local)
NEXT_PUBLIC_BLOG_URL=http://localhost:3001

# Production (Vercel Environment Variables)
NEXT_PUBLIC_BLOG_URL=https://app-b-gules.vercel.app
```

#### app-b (Blog Zone)
```env
# Development (.env.local)
NEXT_PUBLIC_MAIN_APP_URL=http://localhost:3000

# Production (Vercel Environment Variables)
NEXT_PUBLIC_MAIN_APP_URL=https://your-main-app-url.vercel.app
```

### Deployment Troubleshooting

1. Cross-Zone Navigation Issues:
   - Verify environment variables are set correctly in both apps
   - Check vercel.json configuration in app-a
   - Ensure all URLs include the correct protocol (https://)

2. Build Failures:
   - Check build logs for each app
   - Verify root directory settings
   - Ensure all dependencies are installed

3. 404 Errors:
   - Verify rewrites in vercel.json
   - Check basePath configuration in app-b's next.config.js
   - Ensure all cross-zone URLs are correct

### Post-Deployment Verification

1. Test Cross-Zone Navigation:
   - Navigate from main app to blog
   - Test blog post links
   - Verify "Back to Main App" functionality

2. Check Asset Loading:
   - Inspect network requests
   - Verify static assets load correctly
   - Check for any CORS issues

3. Monitor Error Logs:
   - Check Vercel deployment logs
   - Monitor runtime errors
   - Verify environment variables are loaded

## Navigation

The application implements two types of navigation:

1. Internal Zone Navigation:
   - Uses Next.js `Link` component
   - Maintains client-side navigation within zones

2. Cross-Zone Navigation:
   - Uses regular `<a>` tags
   - Handles navigation between zones

## Development Guidelines

1. Zone-Specific Development:
   - Keep zone-specific code within its respective application
   - Use environment variables for cross-zone URLs

2. Routing:
   - app-a handles root routes
   - app-b handles all `/blog/*` routes
   - Avoid route conflicts between zones

3. Asset Management:
   - Each zone manages its own assets
   - Use proper asset prefixing in production

## Contributing

1. Create a feature branch
2. Make your changes
3. Test both applications together
4. Submit a pull request

## Troubleshooting

Common issues and solutions:

1. 404 on blog posts:
   - Ensure app-b is running on port 3001
   - Verify blog post routes exist in `generateStaticParams`

2. Cross-zone navigation issues:
   - Check environment variables
   - Verify vercel.json configuration

## License

[MIT License]

## Additional Resources

- [Next.js Multi-Zones Documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware#using-middleware-to-power-multi-zone-applications)
- [Vercel Deployment Documentation](https://vercel.com/docs)
