# 🍔 **Burger Restaurant Landing Page**

Landing page template for a modern **Burger / Fast Food Restaurant**, built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**, with a fast development workflow powered by **Vite**.
The template is fully responsive and includes multiple interactive UI features.
---
I hosted the project on Netlify, go and see it now! [burger website](https://burger-resto-47.netlify.app/).
---

## ✨ **Features**

* **Fully Responsive Design** — Works on mobile, tablet, and desktop.
* **Tailwind CSS** — Utility-first styling for fast development.
* **Vite (rolldown-vite)** — Super-fast dev server & optimized production builds.
* **Autotyping Text Effect** — Dynamic Hero text animation using JS only.
* **Menu Tabs Filter** — Switch between *Food*, *Snacks*, and *Beverages*.
* **Swiper.js Carousel** — Smooth, touch-friendly customer reviews slider.
* **ScrollReveal Animations** — Fade & slide animations on scroll.
* **Sticky Navigation + Scroll Up Button** — Better navigation experience.
* **PostCSS Setup** — TailwindCSS + Autoprefixer.

---

## 🛠️ **Tech Stack**

| Category   | Tools                           |
| ---------- | ------------------------------- |
| Markup     | HTML5                           |
| Styling    | Tailwind CSS + PostCSS          |
| Scripting  | Vanilla JavaScript (ES Modules) |
| Build Tool | Vite                            |

---

## 📂 **Project Structure**

```
project-folder/
│── index.html
│── style.css
│── main.js
│── tailwind.config.js
│── postcss.config.js
│── package.json
│── img/
│   └── (all assets here)
```

---

## 📦 **Installation**

### 1️⃣ **Prerequisites**

* Node.js (v14+)
* npm / yarn / pnpm

### 2️⃣ **Clone the Repository**

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 3️⃣ **Install Dependencies**

```bash
npm install
```

---

## 🚀 **Development**

Start the development server:

```bash
npm run dev
```

Default local URL:

```
http://localhost:5173
```

---

## 🏗️ **Build for Production**

```bash
npm run build
```

The output will be inside:

```
dist/
```

This build uses relative paths (`--base=./`) so it works perfectly on **GitHub Pages** and any static hosting.

---

## 🎨 **Customization (Tailwind)**

Modify brand colors inside `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primaryColor: '#2C2B2B',
      secondaryColor: '#E1A600', // main highlight color
    },
  },
}
```

Custom components & utilities are defined in `style.css` under:

```css
@layer components {
  /* your custom classes */
}
```
---
## 📄 **License**
> Copyright &copy; 2025. All rights reserved
---
> Created By Abdelrahman Abdelkawy
---
> [!NOTE]
> This project is free to use for personal and commercial purposes.
