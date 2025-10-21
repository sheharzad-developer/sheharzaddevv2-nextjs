# Sheharzad Salahuddin - Portfolio Website

A modern, multilingual portfolio website built with Next.js, featuring responsive design, dark/light theme support, and comprehensive flag display compatibility across all devices.

## 🌟 Features

### Core Features
- **Multilingual Support** - 10 languages (English, Spanish, French, German, Urdu, Japanese, Hindi, Chinese, Austrian German, Russian)
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Modern UI/UX** - Glassmorphism effects, smooth animations, and particle backgrounds
- **SEO Optimized** - Meta tags, structured data, and performance optimized

### Technical Features
- **Cross-Platform Flag Support** - Smart fallbacks for emoji flags on all devices (HP, Dell, etc.)
- **Performance Optimized** - Next.js with static generation and image optimization
- **Accessibility** - ARIA labels, keyboard navigation, and screen reader support
- **Contact Integration** - EmailJS integration for contact forms
- **Animation Library** - Framer Motion for smooth page transitions

## 🚀 Tech Stack

- **Framework**: Next.js 12+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Particles**: Particles.js
- **Contact**: EmailJS
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── components/           # React components
│   ├── about/           # About page components
│   ├── contact/         # Contact page components
│   ├── experience/      # Experience page components
│   ├── layout/          # Layout components
│   ├── projects/        # Projects page components
│   ├── shared/          # Shared components
│   └── reusable/        # Reusable UI components
├── context/             # React context providers
├── data/                # Static data and translations
├── hooks/               # Custom React hooks
├── pages/               # Next.js pages
├── public/              # Static assets
├── styles/              # Global styles
└── utils/               # Utility functions
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sheharzad-developer/sheharzaddev-v2-nextjs.git
   cd sheharzaddev-v2-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌍 Language Support

The website supports 10 languages with automatic detection and manual switching:

- 🇺🇸 English
- 🇪🇸 Spanish (Español)
- 🇫🇷 French (Français)
- 🇩🇪 German (Deutsch)
- 🇵🇰 Urdu (اردو)
- 🇯🇵 Japanese (日本語)
- 🇮🇳 Hindi (हिन्दी)
- 🇨🇳 Chinese (中文)
- 🇦🇹 Austrian German (Österreichisches Deutsch)
- 🇷🇺 Russian (Русский)

### Flag Display Compatibility
- **Smart Detection**: Automatically detects device capabilities
- **Emoji Fallbacks**: Uses native emoji flags when supported
- **Image Fallbacks**: SVG flag images for devices with emoji issues
- **Text Fallbacks**: Country codes as final fallback
- **Cross-Platform**: Works on HP, Dell, and all other devices

## 🎨 Customization

### Adding New Languages
1. Create a new translation file in `data/translations/`
2. Add the language to the `languages` array in `LanguageSwitcher.jsx`
3. Update the `availableLanguages` array in `LanguageContext.jsx`
4. Add flag emoji and SVG image

### Styling
- **Global Styles**: `styles/globals.css`
- **Tailwind Config**: `tailwind.config.js`
- **Component Styles**: Use Tailwind classes in components

### Content Updates
- **Personal Info**: Update `data/aboutMeData.js`
- **Projects**: Modify `data/projectsData.js`
- **Experience**: Edit `data/experienceData.js`
- **Skills**: Update `data/skillsData.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS**: Use AWS Amplify
- **Custom Server**: Build and deploy manually

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style
- **ESLint**: Configured for Next.js
- **Prettier**: Code formatting (recommended)
- **Conventional Commits**: Use conventional commit messages

## 📞 Contact Integration

The contact form uses EmailJS for serverless email handling:

1. **Setup EmailJS**:
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Create email service and template
   - Add credentials to environment variables

2. **Form Configuration**:
   - Update `components/contact/ContactForm.jsx`
   - Modify template variables as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **React Icons** - For the icon library
- **Particles.js** - For the particle background effects

## 📧 Contact

**Sheharzad Salahuddin**
- Email: sheharzad.salahuddin9000@outlook.com
- LinkedIn: [linkedin.com/in/sheharzad-salahuddin](https://linkedin.com/in/sheharzad-salahuddin)
- GitHub: [github.com/sheharzad-developer](https://github.com/sheharzad-developer)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ using Next.js
