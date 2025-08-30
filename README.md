# Dekamond - Authentication System

Open [https://dekamond-task-three.vercel.app/](https://dekamond-task-three.vercel.app/) in your browser to see production on [https://vercel.com](Vercel).

A simple client-side authentication system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔐 Login with Iranian mobile number validation
- 👤 User dashboard with profile information
- 🎨 Responsive design with Tailwind CSS
- 📱 Mobile-first approach

## Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Login Page**: Enter a valid Iranian mobile number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx)
2. **Dashboard**: View user profile after successful authentication
3. **Logout**: Clear session and return to login

## Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Tech Stack

- **Framework**: Next.js 15 + App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: localStorage
