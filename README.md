# Ahmed Salah — Philosophy & Psychology Tutor Platform

This is a **Frontend-Only** Next.js project for the Ahmed Salah educational platform. It is built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- **Premium UI/UX**: Clean, academic, and RTL-first design.
- **Frontend Only**: No backend integration (yet). All data is static placeholders.
- **Responsive**: Fully responsive design for Mobile, Tablet, and Desktop.
- **Components**: Reusable components for Hero, Cards, Modals, etc.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Cairo, IBM Plex Arabic, Poppins, Inter

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Project Structure

- `src/app`: App Router pages.
- `src/components`: Reusable UI components.
  - `layout`: Header, Footer.
  - `ui`: Hero, Cards, Modals, etc.
- `public/svg`: SVG placeholder assets.

## Customization

- **Colors**: Brand colors are defined in `src/app/globals.css` using CSS variables.
- **Fonts**: Fonts are configured in `src/app/layout.tsx`.

## Note

This project is a frontend prototype. All forms and buttons simulate actions but do not connect to a real backend.
