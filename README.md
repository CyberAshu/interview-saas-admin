# Interview SaaS Admin Dashboard

A comprehensive admin panel for Interview SaaS platform with modern UI and complete management features.

![Tech Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Private-red)

## 📋 Features

### Core Modules

- ✅ **Dashboard** - Platform overview with metrics, charts & activity feed
- ✅ **User Management** - User directory, roles & permissions, activity tracking
- ✅ **Coach & Partners** - Coach directory, performance metrics, partner management
- ✅ **Interview Management** - Question bank, AI configuration, session management
- ✅ **Subscription & Billing** - Pricing config, payment monitoring, entitlements
- ✅ **Career Hub** - Job listings and career content management
- ✅ **Analytics & Reports** - User analytics, interview insights, financial reports
- ✅ **Support & Feedback** - Ticket management, issue tracking, compliance
- ✅ **System Administration** - Platform config, monitoring, system health

### UI/UX Features

- 🎨 Modern dark theme with purple-blue gradients
- 📱 Fully responsive design
- 📊 Interactive charts (Recharts)
- 🔄 Collapsible sidebar with localStorage persistence
- 🎯 Tab-based navigation for complex pages
- 🚀 Smooth animations and transitions
- 🎭 Professional stat cards and metrics

## 🛠 Tech Stack

- **React 18** - UI framework with hooks
- **Vite 7.2** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router 6** - Client-side routing
- **Recharts** - Chart library for data visualization
- **Heroicons** - Beautiful SVG icons

## 🎨 Design System

### Colors
```css
Background Primary: #0f1419
Background Secondary: #1e2533
Gradient Start: #8c36ea
Gradient End: #6f65ff
Text Primary: #ffffff
Text Secondary: rgba(255, 255, 255, 0.6)
```

### Typography
- **Font Family**: Poppins (sans-serif)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberAshu/interview-saas-admin.git
cd interview-saas-admin

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
interview-saas-admin/
├── src/
│   ├── components/          # Reusable components
│   │   ├── StatCard.jsx    # Metric display cards
│   │   └── TabLayout.jsx   # Tab navigation component
│   ├── layouts/            # Layout components
│   │   └── AdminLayout.jsx # Main admin layout with sidebar
│   ├── pages/              # Page components
│   │   ├── Dashboard.jsx   # Main dashboard
│   │   └── admin/          # Admin section pages
│   │       ├── UserManagement.jsx
│   │       ├── CoachManagement.jsx
│   │       ├── InterviewManagement.jsx
│   │       ├── BillingManagement.jsx
│   │       └── RemainingPages.jsx
│   ├── App.jsx             # Root component with routing
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md
```

## 🔧 Available Scripts

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📊 Key Components

### AdminLayout
Main layout with collapsible sidebar (72px collapsed, 288px expanded) and header.

### TabLayout
Reusable component for pages with multiple tabs.

### StatCard
Metric display cards with icons, values, and trend indicators.

### Dashboard Charts
- User Growth Trend (Line Chart)
- Interview Sessions by Role (Bar Chart)

## 🎯 Development Guidelines

1. **Component Structure**: Use functional components with hooks
2. **Styling**: Utility-first with Tailwind CSS
3. **State Management**: React hooks (useState, useEffect)
4. **Routing**: React Router with nested routes
5. **Icons**: Use Heroicons SVG components
6. **Charts**: Recharts for data visualization

## 🔐 Features to Add

- [ ] Authentication & Authorization
- [ ] API Integration
- [ ] State Management (Zustand/Redux)
- [ ] Form Validation
- [ ] Dark/Light Theme Toggle
- [ ] Export Functionality
- [ ] Real-time Updates
- [ ] Advanced Filtering

## 📝 License

Private - Interview SaaS Platform

## 👨‍💻 Author

Built with ❤️ for Interview SaaS Platform
