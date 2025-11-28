# 🚀 SPG Portfolio

A modern, visually stunning portfolio website built with **SolidJS** and **SCSS**, featuring a custom merged SPG logo, premium animations, and a professional showcase of skills and projects.

![Portfolio Preview](https://img.shields.io/badge/SolidJS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Features

### 🎨 **Design & UI**
- **Custom Merged Logo** - Unique SPG logo combining all three letters into a single artistic character with blue-purple gradient
- **Premium Animations** - Smooth hover effects, shimmer animations, ripple effects, and micro-interactions
- **Glassmorphism** - Modern glass-effect header with backdrop blur
- **Gradient Effects** - Beautiful color gradients throughout the design
- **Responsive Design** - Fully responsive across all devices and screen sizes

### ⚡ **Performance**
- **Lightning Fast** - Built with SolidJS for optimal performance
- **Optimized Assets** - Efficient loading and rendering
- **Vite Build Tool** - Super-fast HMR (Hot Module Replacement)

### 🛠️ **Technical**
- **TypeScript** - Type-safe development
- **SCSS Modules** - Scoped styling with variables and mixins
- **Client-Side Routing** - Smooth navigation with @solidjs/router
- **Icon Library** - solid-icons for consistent iconography
- **Modern Tooling** - ESLint, TypeScript, and Vite configuration

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── logo.png              # Custom merged SPG logo
│   └── favicon.ico           # Favicon
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation with logo
│   │   ├── Header.module.scss
│   │   ├── Hero.tsx          # Landing section with CTA buttons
│   │   ├── Hero.module.scss
│   │   ├── Skills.tsx        # Tech stack showcase
│   │   ├── Projects.tsx      # Project portfolio
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer section
│   ├── pages/
│   │   ├── Home.tsx          # Home page
│   │   ├── About.tsx         # About page
│   │   ├── ProjectsPage.tsx  # Projects page
│   │   └── ContactPage.tsx   # Contact page
│   ├── styles/
│   │   ├── _variables.scss   # Design tokens & colors
│   │   ├── _mixins.scss      # Reusable SCSS mixins
│   │   ├── _global.scss      # Global styles
│   │   └── index.scss        # Main stylesheet
│   ├── App.tsx               # Root component
│   └── index.tsx             # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite configuration
└── README.md                 # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173)

---

## � Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

---

## 🎨 Customization Guide

### 🖼️ **Logo**

The custom merged SPG logo is located at `/public/logo.png`. To customize:

1. Replace the logo file with your own design
2. Update the favicon at `/public/favicon.ico`
3. Modify logo size in `src/components/Header.module.scss`:
   ```scss
   .logoImage {
       width: 48px;  // Adjust size
       height: 48px;
   }
   ```

### 🎨 **Colors & Theme**

Edit `src/styles/_variables.scss` to customize the color scheme:

```scss
// Background Colors
$bg-color: #0f0f0f;
$surface-color: rgba(255, 255, 255, 0.05);

// Brand Colors
$primary-color: #00D4FF;    // Electric Blue
$secondary-color: #9D4EDD;  // Purple

// Text Colors
$text-primary: #ffffff;
$text-secondary: #b0b0b0;
$text-muted: #808080;
```

### 📝 **Content**

Update your personal information in the following files:

1. **Hero Section** - `src/components/Hero.tsx`
   - Name, title, description
   - CTA buttons and links

2. **Skills** - `src/components/Skills.tsx`
   - Add/remove technologies
   - Update skill categories

3. **Projects** - `src/components/Projects.tsx`
   - Add your projects
   - Include descriptions, tech stack, and links

4. **Experience** - `src/components/Experience.tsx`
   - Add work experience
   - Include achievements and metrics

5. **Contact** - `src/components/Contact.tsx`
   - Update contact information
   - Social media links

### 🎭 **Animations**

Customize button animations in `src/components/Hero.module.scss`:

```scss
.btnPrimary {
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba($primary-color, 0.6);
    }
}
```

---

## �️ Technologies Used

### **Frontend Framework**
- **SolidJS** (v1.9.10) - Fine-grained reactive UI framework
- **TypeScript** (v5.9.3) - Type-safe JavaScript

### **Styling**
- **SCSS** (v1.94.2) - CSS preprocessor with variables and mixins
- **CSS Modules** - Scoped component styling

### **Routing**
- **@solidjs/router** (v0.15.4) - Client-side routing

### **Icons**
- **solid-icons** (v1.1.0) - Icon library for SolidJS
- **lucide-solid** (v0.555.0) - Additional icon set

### **Build Tools**
- **Vite** (v7.2.4) - Next-generation frontend tooling
- **vite-plugin-solid** (v2.11.10) - SolidJS plugin for Vite

---

## 👨‍💻 About the Developer

### **Saurabh Prashant Gathade**

**Frontend/Full Stack Engineer** with expertise in building scalable web applications and AI-powered platforms.

### 🏢 **Professional Experience**

#### **Techolution** | Frontend/Full Stack Engineer
*Apr 2024 - Present*
- 🚀 Achieved **40% latency reduction** in streaming systems
- ⚡ Improved TTFB by **27%** and reduced bundle size by **18%**
- ✅ Maintained **93% test coverage** on Voice-to-Text streaming

#### **I AM First Digition** | Full Stack Developer
*Feb 2023 - Mar 2024*
- 📈 Improved API performance by **30%**
- 📱 Developed React Native + Node.js applications

#### **BYJU'S** | Sr. Business Development Associate
*Oct 2020 - Feb 2023*
- 🏆 Top 5 national ranking
- 👥 Mentored 778+ team members

### 💻 **Technical Skills**

**Frontend:** React.js, Next.js, SolidJS, TypeScript, TailwindCSS, Redux, React Native  
**Backend:** Node.js, Express.js, FastAPI, Python, GraphQL, Microservices  
**Databases:** MongoDB, PostgreSQL, Redis  
**Cloud & DevOps:** AWS, Docker, CI/CD, Nginx  
**AI/ML:** LLM Integration, OpenAI APIs, Langchain

### 🎯 **Featured Projects**

1. **LLM Studio Platform** - Enterprise AI with real-time streaming
2. **Real-Time AI Chat** - Event-driven architecture with WebSockets
3. **ChatHub** - Socket.IO real-time messaging application
4. **Placement Cell** - JWT authentication system
5. **Web Scraping Automation** - Anti-bot detection workflows
6. **Jai Bhim Connect** - Cross-platform educational technology

---

## 📞 Contact

- 📧 **Email:** [saurabhgathade@gmail.com](mailto:saurabhgathade@gmail.com)
- 📱 **Phone:** +91 9689525960
- 💼 **LinkedIn:** [linkedin.com/in/saurabhpgathade](https://www.linkedin.com/in/saurabhpgathade/)
- 🐙 **GitHub:** [github.com/Saurabhgathade131](https://github.com/Saurabhgathade131)
- 📄 **Resume:** [View Resume](https://drive.google.com/file/d/1O-N2iH1nuqSb80WgUTtHIN4zqaDyV7HQ/view?usp=drive_link)

---

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

```
MIT License

Copyright (c) 2024 Saurabh Prashant Gathade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to:
- Fork the repository
- Create your own version
- Submit issues for bugs
- Suggest improvements

---

## 🙏 Acknowledgments

- **SolidJS Team** - For the amazing reactive framework
- **Vite Team** - For the blazing-fast build tool
- **Design Inspiration** - Modern web design trends and best practices

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Saurabhgathade131/portfolio?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Saurabhgathade131/portfolio?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/Saurabhgathade131/portfolio?style=social)

---

<div align="center">

### Built with ❤️ using SolidJS

**Designed & Developed by Saurabh Prashant Gathade**

⭐ Star this repo if you found it helpful!

</div>
