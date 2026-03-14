# Solar Business Website

A premium, modern, and eco-friendly solar business website built with React and Material UI (MUI v5). This website is fully responsive, conversion-focused, and includes smooth animations using Framer Motion.

## 🌟 Features

- **Modern UI/UX**: Clean, premium design with eco-friendly color scheme
- **Fully Responsive**: Works seamlessly on Mobile → Tablet → Desktop → Ultra-wide screens
- **Theme Switching**: Light/Dark mode support
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Blog page and meta tags for better search visibility
- **Fast Loading**: Optimized components and code splitting

## 🎨 Color Theme

- **Primary**: #FFA500 (Solar Orange)
- **Secondary**: #2B7A0B (Eco Green)
- **Accent**: #1E293B (Dark Slate)
- **Background**: #F2F7F5 (Soft Eco White)
- **Text**: #0F172A

## 📦 Pages

1. **Home** - Hero section, products, services, testimonials, FAQ, CTA
2. **About Us** - Mission, vision, why solar, why us
3. **Products** - Solar panels, rooftop systems, water heaters, pumps, inverters, EPC
4. **Services** - Installation, maintenance, subsidy assistance, site survey
5. **Portfolio** - Case studies and project showcases
6. **Subsidy & Finance** - Government schemes and financing options
7. **Contact** - Contact form with map integration
8. **Blog** - SEO-optimized blog posts

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the project files
2. Navigate to the project directory:
   ```bash
   cd Solar
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Solar/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── HeroBanner/
│   │   ├── SolarProductsGrid/
│   │   ├── ServicesGrid/
│   │   ├── CaseStudyCard/
│   │   ├── TestimonialSlider/
│   │   ├── FAQAccordion/
│   │   ├── ContactForm/
│   │   ├── ScrollToTop/
│   │   ├── WhatsAppButton/
│   │   ├── AnimatedCounter/
│   │   └── Layout/
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Products/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   ├── Subsidy/
│   │   ├── Contact/
│   │   └── Blog/
│   ├── theme/
│   │   └── theme.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Key Components

### Reusable Components

- **Navbar**: Sticky navigation with theme toggle
- **HeroBanner**: Eye-catching hero section with CTA buttons
- **SolarProductsGrid**: Product showcase grid
- **ServicesGrid**: Services display with icons
- **CaseStudyCard**: Portfolio project cards
- **TestimonialSlider**: Customer reviews carousel
- **FAQAccordion**: Expandable FAQ section
- **ContactForm**: Contact form with validation
- **ScrollToTop**: Floating scroll-to-top button
- **WhatsAppButton**: Floating WhatsApp contact button
- **AnimatedCounter**: Animated number counters

## 🔧 Customization

### Update Contact Information

Edit the contact details in:
- `src/components/Footer/Footer.js`
- `src/pages/Contact/Contact.js`
- `src/components/WhatsAppButton/WhatsAppButton.js` (WhatsApp number)

### Update Theme Colors

Modify colors in `src/theme/theme.js`

### Add Google Maps

Replace the placeholder in `src/pages/Contact/Contact.js` with your Google Maps embed code.

## 📱 Features

- ✅ Responsive design (Mobile, Tablet, Desktop, Ultra-wide)
- ✅ Light/Dark theme switching
- ✅ Smooth scroll animations
- ✅ Sticky navbar
- ✅ Scroll-to-top button
- ✅ WhatsApp floating button
- ✅ Animated counters
- ✅ Testimonial slider
- ✅ FAQ accordion
- ✅ Contact form
- ✅ SEO-friendly structure

## 🛠️ Technologies Used

- **React** 18.2.0
- **Material UI (MUI)** v5.14.20
- **Framer Motion** 10.16.16
- **React Router** 6.20.1
- **Emotion** (for styling)

## 📝 Notes

- All images are using placeholder URLs. Replace them with your actual images.
- WhatsApp number needs to be updated in `WhatsAppButton.js`
- Google Maps integration needs to be added in `Contact.js`
- Form submissions are simulated. Connect to your backend API.

## 📄 License

This project is open source and available for use.

## 🤝 Support

For support, email info@solareenergy.com or create an issue in the repository.

---

Built with ❤️ using React and Material UI

