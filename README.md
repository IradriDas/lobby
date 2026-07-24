<div align="center">

# 🎥 Lobby

**A full-featured video conferencing platform built with Next.js & Stream**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-purple?logo=clerk)](https://clerk.com/)
[![Stream](https://img.shields.io/badge/Video-Stream-blue)](https://getstream.io/)
[![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- 🔐 **Authentication** — Secure sign-in & sign-up via Clerk (Google, GitHub, email)
- 📹 **Instant Meetings** — Start a video call with one click
- 📅 **Schedule Meetings** — Plan meetings for a future date and share invite links
- 🏠 **Personal Room** — Each user gets a persistent personal meeting room
- 🗂️ **Meeting History** — Browse upcoming, previous, and recorded meetings
- 🎞️ **Recordings** — View and replay recorded sessions
- 🎛️ **In-Call Controls** — Camera, microphone, screen share, participants list, and layout switching
- 👑 **Host Controls** — Meeting owner can end the call for all participants
- 📋 **Copy Invite Link** — Shareable links for every meeting
- 🔗 **Join by Link** — Join any meeting by pasting its URL

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Authentication | [Clerk](https://clerk.com/) |
| Video & Audio | [Stream Video React SDK](https://getstream.io/video/docs/react/) |
| UI Primitives | [Base UI](https://base-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Date Picker | [React Datepicker](https://reactdatepicker.com/) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A [Clerk](https://clerk.com/) account
- A [Stream](https://getstream.io/) account

### 1. Clone the repository

```bash
git https://github.com/IradriDas/lobby.git
cd lobby
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root of the project and add the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Stream Video
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> **Where to find these keys:**
> - Clerk keys → [Clerk Dashboard](https://dashboard.clerk.com/) → Your App → API Keys
> - Stream keys → [Stream Dashboard](https://dashboard.getstream.io/) → Your App → Overview

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
zoom_clone/
├── app/
│   ├── (auth)/                  # Sign-in / Sign-up pages
│   ├── (root)/
│   │   ├── (home)/              # Main dashboard & sub-pages
│   │   │   ├── upcoming/        # Upcoming meetings
│   │   │   ├── previous/        # Past meetings
│   │   │   ├── recordings/      # Recorded sessions
│   │   │   └── personal-room/   # User's persistent meeting room
│   │   └── meeting/[id]/        # Active meeting room
│   ├── api/                     # API routes (Stream token generation)
│   └── layout.tsx               # Root layout with Clerk & Stream providers
├── components/
│   ├── ui/                      # Reusable UI primitives (Button, Dialog, Toast, etc.)
│   ├── MeetingTypeList.tsx      # Home page meeting action cards
│   ├── MeetingModal.tsx         # Shared modal for meeting actions
│   ├── MeetingRoom.tsx          # In-call layout & controls
│   ├── MeetingSetup.tsx         # Pre-join camera/mic setup screen
│   ├── MeetingCard.tsx          # Card component for meeting lists
│   ├── CallList.tsx             # Reusable list for upcoming/ended/recordings
│   └── EndCallButton.tsx        # Host-only end-call control
├── hooks/
│   ├── useGetCalls.ts           # Fetches & filters calls by type
│   └── useGetCallById.ts        # Fetches a single call by ID
├── constants/
│   └── index.ts                 # Navigation links
└── providers/
    └── StreamClientProvider.tsx # Stream Video client & token provisioning
```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 🚢 Deployment

The easiest way to deploy Lobby is with [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Add all environment variables from `.env.local` in the Vercel project settings
4. Deploy — Vercel handles the rest

> Remember to update `NEXT_PUBLIC_BASE_URL` to your production URL before deploying.

---
