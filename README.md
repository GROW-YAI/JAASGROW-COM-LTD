# JAASGROW COMPANY LIMITED Website

## Project Overview

JAASGROW COMPANY LIMITED is a corporate website for an agricultural company that specializes in organic farming solutions. The website showcases the company's mission to "Nurture the Earth, Empower Farmers, Promote Environmentally Sustainable Agriculture."

### Purpose & Main Features

The website serves as the primary digital presence for JAASGROW LIMITED COMPANY, featuring:

- **Hero Section**: Dynamic landing page with a compelling tagline "The Farmers' Choice" and key value propositions including organic solutions, multiple effects (fertilizer, pesticide & soil amendment), and proven results (up to 50% yield increase)
- **About Services**: Detailed information about the company's agricultural services
- **Products**: Showcase of the company's organic farming products
- **Testimonials**: Customer reviews and success stories
- **Contact**: Contact form and information for potential customers
- **Responsive Navigation**: Mobile-friendly navbar with smooth scrolling
- **Accessibility**: Integrated Boafo accessibility widget to ensure the site is accessible to all users

### Technologies Used

- **Frontend Framework**: React with Vite for fast development and hot module replacement
- **Styling**: Tailwind CSS for utility-first responsive design
- **Routing**: React Router DOM for client-side navigation
- **Animations**: Framer Motion for smooth UI animations
- **Accessibility**: Boafo Accessibility Widget for WCAG compliance
- **Build Tool**: Vite with PostCSS for optimized production builds
- **Linting**: ESLint for code quality enforcement

### Boafo Accessibility Widget

This website integrates the [Boafo Accessibility Widget](https://boafo.co) to ensure the site is accessible to all users, including those with disabilities. The widget provides features such as:
- Screen reader compatibility
- Keyboard navigation support
- High contrast modes
- Font size adjustments
- And more accessibility enhancements

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in if you already have one
3. Navigate to your dashboard
4. Copy your API key from the dashboard

## How to Integrate the Boafo Widget

Please follow the official integration guide at:
[https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/JAASGROW-COM-LTD.git
   cd JAASGROW-COM-LTD
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Then edit the `.env` file and add your Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_actual_boafo_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   pnpm build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   # or
   pnpm preview
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo Accessibility Widget API key | Yes |
