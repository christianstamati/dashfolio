# Dashfolio

A modern, dashboard-style portfolio website built with Next.js and Payload CMS. Clean, professional, and easily customizable for showcasing your work and content.

## ✨ Features

- **Home** - Welcome page with an overview of your professional profile
- **About** - Personal background, skills, and experience
- **Projects** - Showcase of your work and portfolio pieces
- **Writings** - Blog posts, articles, and written content
- **Contact** - Easy ways for visitors to get in touch

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **CMS**: [Payload CMS](https://payloadcms.com/) - Modern headless CMS
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Database**: MongoDB/PostgreSQL (configurable)
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Pnpm package manager
- MongoDB database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/christianstamati/dashfolio.git
   cd dashfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   PAYLOAD_SECRET=your-secret-key
   DATABASE_URL=your-database-connection-string
   S3_ACCESS_KEY_ID=your-access-key-id
   S3_SECRET_ACCESS_KEY=your-secret-access-key
   S3_REGION=yeour-region
   S3_BUCKET=your-bucket-name
   ```

4. **Run the development server**
   ```bash
   pnpm run dev
   ```

5. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 Project Structure

```
dashfolio/
├── app/                   # Next.js app directory
│   ├── (pages)/          # Main portfolio pages
│   │   ├── about/
│   │   ├── projects/
│   │   ├── writings/
│   │   └── contact/
│   └── admin/            # Payload CMS admin
├── components/           # Reusable React components
├── payload/             # Payload CMS configuration
│   ├── collections/     # Content collections
│   └── globals/         # Global settings
├── styles/              # Global styles
├── public/              # Static assets
├── payload.config.ts    # Payload CMS configuration
└── next.config.js      # Next.js configuration
```

## 🎨 Customization

### Content Management

Access the Payload CMS admin panel at `/admin` to:
- Update your personal information
- Add/edit projects
- Publish blog posts and writings
- Manage contact information
- Upload media and assets

### Styling

The project uses Tailwind CSS for styling. Customize the theme by editing:
- `src/styles/globals.css` - Global styles
- Component-level styles in individual files

### Collections

Payload CMS collections are configured in `payload/collections/`:
- `Projects.ts` - Portfolio projects
- `Posts.ts` - Blog posts and writings
- `Media.ts` - File uploads and images

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm run build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

## 📝 Content Guidelines

### Projects
- Include high-quality images
- Write compelling descriptions
- Add links to live demos and source code
- Tag projects with relevant technologies

### Writings
- Use clear, engaging titles
- Add featured images for better visual appeal
- Organize content with proper headings
- Include meta descriptions for SEO

## 🔧 Configuration

### Database Setup

**MongoDB**
```env
DATABASE_URI=mongodb://localhost:27017/dashfolio
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Payload CMS](https://payloadcms.com/) for the powerful headless CMS
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub
- Send me an email: christian.stamati@gmail.com