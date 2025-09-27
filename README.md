# Pulse Fitness Studio Website

🏋️ **Professional Fitness Studio Website with Interactive Gallery**

A modern, responsive one-page website for Pulse Fitness Studio featuring sticky navigation, smooth scrolling, and Instagram-style horizontal image carousels. Built with vanilla HTML, CSS, and JavaScript for optimal performance and seamless user experience across all devices.

## 📖 Description

The website showcases Pulse Fitness Studio's three main programs through interactive galleries:

**Interactive Image Carousels** - Horizontal scrolling galleries for Fitness, Boxing, and Yoga with arrow controls and smooth transitions.

**Responsive Design** - Mobile-first approach with hamburger menu, sticky navigation, and smooth scrolling between sections.

**Modern UI/UX** - Professional dark theme with gradient backgrounds, hover effects, and accessibility features.

⚠️ **Note**: This is a template website for fitness studios. Customize content, images, and branding for your specific studio.

## 🛠 Tech Stack

- **HTML5** — Semantic structure with accessibility features
- **CSS3** — Flexbox, Grid, CSS Variables, Scroll Snap for smooth interactions
- **JavaScript (Vanilla)** — Carousel controls and mobile menu functionality
- **Google Fonts** — Montserrat font family for modern typography

## 🚀 Setup & Run

### 1. Download and extract project
```powershell
# Download the ZIP file and extract to your desired folder
# Navigate to the extracted folder
cd "C:\Users\YourName\Desktop\Fitness Website"
```

### 2. Add your studio images
Replace the placeholder images in these folders with your own photos:
- `images\fitness\` — Strength training, equipment, workouts
- `images\boxing\` — Boxing classes, training, equipment  
- `images\yoga\` — Yoga poses, classes, meditation

**Supported formats**: JPG, PNG, WEBP

### 3. View the website
```powershell
# Open index.html in your default browser
Start-Process "index.html"

# Or simply double-click index.html in File Explorer
```

### 4. Deploy to web hosting
Upload all files to your web hosting service:
- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages

## 🎨 Customization

### Branding & Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary: #4f7cff;        /* Main brand color */
  --accent: #00d1b2;         /* Accent color */
  --bg: #0f1115;            /* Background color */
  --text: #e6e8ee;          /* Text color */
}
```

## 📱 Website Sections

1. **Home/Hero** — Welcome message with call-to-action buttons
2. **About** — Studio description with key statistics and achievements
3. **Services** — Three main programs (Personal Training, Strength & Conditioning, Mobility & Recovery)
4. **Gallery** — Interactive carousels showcasing studio activities by category
5. **Contact** — Contact information and inquiry form

## 🎮 Interactive Features

**Navigation**
- Sticky navigation bar with backdrop blur effect
- Smooth scrolling between sections
- Mobile hamburger menu with animated toggle

**Image Carousels**
- Horizontal scrolling with arrow controls
- Scroll snap for smooth image transitions
- Responsive grid layout adapting to screen size
- Hover effects and smooth animations

## 🐛 Troubleshooting

**Images not loading** → Check file paths in `images/` folders match exactly

**Mobile menu not working** → Ensure JavaScript is enabled in browser

**Carousel not scrolling** → Check browser supports CSS Scroll Snap

**Styling issues** → Verify `style.css` is properly linked in `index.html`

## 🖼 Screenshots

*Add screenshots of your website here:*
- Desktop view showing full layout
- Mobile view with hamburger menu
- Gallery carousels in action
- Contact section with form

## Conclusion

A clean, professional, and fully responsive fitness studio website template that combines modern design principles with smooth user interactions. Perfect for showcasing gym facilities, classes, and building client engagement through an intuitive browsing experience.
