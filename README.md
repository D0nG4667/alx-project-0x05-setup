# 🎨 Image Generation App (HookMastery Series)

This project is part of the **HookMastery: Unleashing the Power of Hooks** series.  
It evolves through multiple milestones (0x07 → 0x13), each introducing new concepts in **React hooks**, **state management**, **API integration**, and **custom hooks**.

---

## 🚀 Overview
The Image Generation App allows users to generate AI-powered images based on text prompts using the GPT‑4 Image Generation API.  
It features a clean UI, responsive design with Tailwind CSS, and demonstrates best practices in React and Next.js development.

---

## 📂 Basic Project Structure
```
alx-project-0x07/
├── components/
│   ├── common/
│   │   └── ImageCard.tsx
│   └── layouts/
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Layout.tsx
├── constants/
│   └── index.ts
├── hooks/
│   └── useFetchData.ts
├── interfaces/
│   └── index.ts
├── pages/
│   ├── api/
│   │   └── generate-image.ts
│   ├── _app.tsx
│   └── index.tsx
└── styles/
    └── globals.css
```

---

## 📝 Milestones

### **Task 0: Advance Image Generation App**
- Scaffolded Next.js project `alx-project-0x07`.
- Added layout components: `Header`, `Footer`, `Layout`.
- Defined `ReactComponentProps` interface.
- Implemented Home page with prompt input and "Generate Image" button.
- Introduced `useState` for managing prompt input.

---

### **Task 1: Application of State**
- Duplicated project to `alx-project-0x08`.
- Added new interfaces: `GeneratedImageProps`, `ImageProps`.
- Created reusable `ImageCard` component.
- Extended Home page with states:
  - `prompt`, `imageUrl`, `generatedImages`, `isLoading`.
- Conditionally rendered `ImageCard` when an image is generated.

---

### **Task 2: Set up Local Environment**
- Duplicated project to `alx-project-0x09`.
- Added `.env` file to store `NEXT_PUBLIC_GPT_API_KEY`.
- Updated `.gitignore` to exclude `.env`.
- Modified `handleGenerateImage` to log API key from environment variables.

---

### **Task 3: Generate Image Based on User Prompt**
- Added `constants/index.ts` with `WIDTH` and `HEIGHT`.
- Implemented API route `pages/api/generate-image.ts`:
  - Calls GPT‑4 Image Generation endpoint.
  - Handles errors and returns generated image URL.
- Updated Home page:
  - `handleGenerateImage` posts prompt to API route.
  - Added loading state and conditional rendering of `ImageCard`.

---

### **Task 4: Track Images Generated**
- Duplicated project to `alx-project-0x11`.
- Extended Home page:
  - Added `generatedImages` state to track history.
  - Updated `handleGenerateImage` to append new images to history.
- Prepared UI to render multiple `ImageCard` components for gallery view.

---

### **Task 5: Custom Hook**
- Duplicated project to `alx-project-0x12`.
- Created `hooks/useFetchData.ts`:
  - Generic hook for API calls.
  - Manages `isLoading`, `responseData`, `error`, `generatedImages`.
- Refactored Home page:
  - Replaced inline API logic with `useFetchData`.
  - Used `useEffect` to update `imageUrl` when response changes.
  - Rendered gallery of all generated images in a responsive grid.

---

## ✨ Features
- **Prompt Input**: Users type text prompts to generate images.
- **Image Generation**: GPT‑4 API integration via Next.js API routes.
- **State Management**: `useState`, `useEffect`, and custom hooks.
- **Image Gallery**: Tracks and displays all generated images.
- **Reusable Components**: `ImageCard`, `Header`, `Footer`, `Layout`.
- **Responsive Design**: Tailwind CSS for mobile and desktop layouts.
- **Environment Security**: API keys stored in `.env.local`.

---

## 🛠️ Setup & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/D0nG4667/alx-project-0x05-setup.git
   ```
2. Navigate to the desired milestone directory (e.g., `alx-project-0x13`).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add your API key to `.env.local`:
   ```env
   NEXT_PUBLIC_GPT_API_KEY="YOUR_API_KEY"
   ```
5. Run the development server:
   ```bash
   npm run dev -- -p 3000
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Preview
- Enter a prompt → click **Generate Image**.
- Watch the loading state → see the generated image.
- Each new image is stored in history → browse via gallery thumbnails.

---

## 🧑‍💻 Learning Objectives Achieved
- Implemented React state management with `useState`.
- Created and utilized custom hooks.
- Worked with environment variables for API key management.
- Implemented API routes in Next.js.
- Developed reusable React components.
- Managed application state across multiple components.
- Implemented responsive UI design with Tailwind CSS.
- Handled asynchronous operations in React.
- Followed React best practices for component structure and organization.

---

## 📅 Project Timeline
- **0x07** → Basic setup and layout.
- **0x08** → State management.
- **0x09** → Environment configuration.
- **0x10** → API integration.
- **0x11** → Image tracking.
- **0x12–0x13** → Custom hooks and gallery.

---

## 🔒 Notes
- API key must remain private in `.env`.
- This project is for educational purposes under the ALX curriculum.
- Future improvements may include authentication, persistent storage, advanced error handling, and social sharing.
