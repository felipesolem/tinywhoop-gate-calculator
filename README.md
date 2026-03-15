# 🚁 TinyWhoop PVC Gate Calculator

> Calculate PVC materials needed for FPV TinyWhoop obstacle courses

A modern, glassmorphism-styled web calculator that helps FPV drone pilots determine exactly how much PVC tubing and connectors they need to build obstacle courses for TinyWhoop racing.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)
![No Dependencies](https://img.shields.io/badge/dependencies-none-green.svg)

---

## ✨ Features

- 🎯 **8 Pre-configured Obstacle Types** — From simple gates to complex ladders and cubes
- 🧮 **Automatic Calculations** — Instantly compute tubes, connectors, and total PVC length
- 📏 **Multi-unit Support** — Results in inches, feet, and meters
- 🎨 **Modern Glassmorphism UI** — Beautiful futuristic design with smooth animations
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile
- ⚡ **Zero Dependencies** — Pure vanilla JavaScript, no frameworks needed
- 🚀 **Instant Setup** — Just open `index.html` in any browser

---

## 🎯 How to Use

1. **Enter Gate Size**: Input the size per side in inches (19" is the standard TinyWhoop gate size)
2. **Select Obstacles**: Choose how many of each obstacle type you want to build
3. **Calculate**: Click the "Calculate Materials" button
4. **Review Results**: Get your complete shopping list with:
   - Number of full-size tubes
   - Number of floor tubes (half-size)
   - Connector counts by type
   - Total PVC length in inches, feet, and meters

### Example

For a course with:
- Gate size: 19 inches
- 3x Single Gates
- 1x Ladder Full (3 steps)

You'll get:
- **Full-size tubes**: 18 tubes (19" each)
- **Floor tubes**: 16 tubes (9.5" each)
- **T-connectors**: 12
- **Elbow connectors**: 8
- **Total PVC length**: ~494 inches / 41.2 ft / 12.5 m

---

## 📦 Obstacle Types

| Obstacle | Full Tubes | Floor Tubes | T-Conn. | Elbow | 5-Hole | Cube Conn. |
|----------|------------|-------------|---------|-------|--------|------------|
| **Ladder 2 steps and Pylon** | 7 | 4 | 5 | 1 | 0 | 0 |
| **Ladder Full (3 steps)** | 9 | 4 | 6 | 2 | 0 | 0 |
| **Ladder 2 steps with side gate** | 8 | 6 | 5 | 3 | 0 | 0 |
| **Floor continuous gates 3** | 7 | 8 | 6 | 2 | 0 | 0 |
| **Floor continuous gates 2** | 5 | 6 | 4 | 2 | 0 | 0 |
| **Single Gate** | 3 | 4 | 2 | 2 | 0 | 0 |
| **Cube** | 8 | 0 | 0 | 0 | 0 | 4 |
| **Pylon** | 1 | 4 | 0 | 0 | 1 | 0 |

---

## 🧮 Calculation Logic

### Tube Sizes
- **Full-size tube** = Gate size you enter (e.g., 19")
- **Floor tube** = Half of gate size (e.g., 9.5" for a 19" gate)

### Connector Types
- **T-connectors (3 holes)**: Create T-shaped junctions for vertical/horizontal connections
- **Elbow connectors (2 holes)**: 90-degree angle connections for corners
- **5-hole connectors**: Cross/plus shape for complex multi-directional structures
- **Cube connectors**: Specialized box corners for cube obstacles (4 per cube)

### Formula
```
Total Length = (Full tubes × Gate size) + (Floor tubes × Gate size / 2)
```

All calculations are summed across selected obstacles and converted to feet and meters.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup with collapsible instructions panel
- **CSS3** — Modern glassmorphism design with CSS variables and animations
- **Vanilla JavaScript (ES6+)** — Arrow functions, template literals, array methods
- **Google Fonts** — Inter typeface for clean, modern typography

### No Build Tools Required
This is a pure client-side application. No npm, webpack, or any build process needed.

---

## 🚀 Quick Start

### Option 1: Direct Open
```bash
# Clone the repository
git clone https://github.com/yourusername/tinywhooop-gates.git

# Navigate to the directory
cd tinywhooop-gates

# Open in browser
open index.html
```

### Option 2: Local Server
```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Then open http://localhost:8080
```

### Option 3: Live Server (VS Code)
1. Install the "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 📂 Project Structure

```
tinywhooop-gates/
├── index.html          # Main HTML structure
├── styles.css          # Glassmorphism styling
├── app.js              # Calculator logic (ES6+)
├── package.json        # Project metadata
└── README.md           # This file
```

---

## 🎨 Design Features

### Glassmorphism UI
- Frosted glass effect with `backdrop-filter: blur()`
- Subtle transparency and layering
- Smooth animations and transitions
- Gradient accents (cyan → purple)
- Responsive grid layouts

### Accessibility
- Semantic HTML5 elements
- Proper focus states for keyboard navigation
- High contrast text for readability
- Mobile-friendly touch targets

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Ideas for Contributions
- Add more obstacle types
- Support for different tube materials (PVC, carbon fiber, etc.)
- Export results to PDF or CSV
- Save/load course configurations
- Cost calculator based on material prices
- Visual course builder

---

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 TinyWhoop Gates Calculator

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

## 🙏 Acknowledgments

- Built with ❤️ for the FPV community
- Inspired by the need for accurate material planning in TinyWhoop racing
- Design influenced by modern glassmorphism trends

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/tinywhooop-gates/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/tinywhooop-gates/discussions)

---

## 🔮 Future Roadmap

- [ ] Dark/light theme toggle
- [ ] Material cost estimator
- [ ] 3D course visualizer
- [ ] Export to shopping list format
- [ ] Multi-language support
- [ ] Offline PWA support
- [ ] Custom obstacle builder

---

**Happy Building! 🚁✨**
