# Yurtdışı Göç Rehberi 🌍

A comprehensive Turkish emigration consultation platform that helps users find their best destination countries through personalized recommendations.

## 🎯 Features

### User Experience
- **Multi-step Onboarding Form**: Smooth 6-step modal form to collect user information
- **Personalized Recommendations**: AI-powered matching algorithm based on user profile
- **Country Detail Pages**: Comprehensive information with tabbed interface
- **Category Pages**: Pre-made lists for students, IT professionals, healthcare workers, entrepreneurs
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Turkish Language**: All content in Turkish for the target audience

### Technical Features
- **Next.js 16**: Latest React framework with App Router
- **Zustand**: State management with localStorage persistence
- **Prisma**: Type-safe database ORM
- **Supabase**: PostgreSQL database and authentication
- **shadcn/ui**: Beautiful, accessible UI components
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Modern utility-first styling

## 🚀 Quick Start

See [QUICK_START.md](./QUICK_START.md) for deployment instructions.

### Local Development

1. **Clone and install**:
\`\`\`bash
git clone https://github.com/byessilyurt/yurtdisi-goc-rehberi.git
cd yurtdisi-goc-rehberi
npm install
\`\`\`

2. **Set up environment** (optional for local development):
\`\`\`bash
cp .env.example .env
# Add your Supabase credentials (or use mock data)
\`\`\`

3. **Run development server**:
\`\`\`bash
npm run dev
\`\`\`

4. **Open** [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
yurtdisi-goc-rehberi/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout
│   ├── oneriler/            # Recommendations page
│   ├── ulke/[slug]/         # Country detail pages
│   └── kategori/[slug]/     # Category pages
├── components/              # React components
│   ├── onboarding-modal.tsx # Main modal form
│   ├── form-steps/          # Individual form steps
│   └── ui/                  # shadcn/ui components
├── lib/                     # Utilities and configuration
│   ├── store.ts             # Zustand state management
│   ├── mock-data.ts         # Country data (temporary)
│   ├── recommendation-engine.ts # Matching algorithm
│   ├── supabase.ts          # Supabase client
│   └── prisma.ts            # Prisma client
├── prisma/
│   └── schema.prisma        # Database schema
└── public/                  # Static assets
\`\`\`

## 🗄️ Database Schema

See [prisma/schema.prisma](./prisma/schema.prisma) for full schema.

**Main Models:**
- `Country`: Country information and metadata
- `VisaType`: Different visa types per country
- `Requirement`: Visa requirements
- `Resource`: Helpful links and resources
- `Cost`: Cost breakdowns
- `UserProfile`: User session data
- `CategoryList`: Pre-made category lists

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel
- **Icons**: Lucide React

## 📝 Documentation

- [QUICK_START.md](./QUICK_START.md) - Deployment checklist
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Supabase configuration
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide

## 🔧 Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema to database
npx prisma studio    # Open Prisma Studio (GUI)
\`\`\`

### Adding New Features

1. **New Form Step**: Add to `components/form-steps/`
2. **New Page**: Add to `app/` directory
3. **New UI Component**: Use shadcn CLI: `npx shadcn@latest add [component]`
4. **Database Changes**: Update `prisma/schema.prisma` then run `npx prisma db push`

## 🌍 Supported Countries

Currently includes mock data for:
- 🇨🇦 Kanada (Canada)
- 🇩🇪 Almanya (Germany)
- 🇳🇱 Hollanda (Netherlands)
- 🇦🇺 Avustralya (Australia)
- 🇪🇸 İspanya (Spain)
- 🇵🇹 Portekiz (Portugal)

## 🎯 Roadmap

### Phase 1: MVP (Current)
- [x] Multi-step form
- [x] Recommendation engine
- [x] Country detail pages
- [x] Category pages
- [x] Responsive design

### Phase 2: Data & Content
- [ ] Real country data
- [ ] Admin panel
- [ ] Content management system
- [ ] Blog integration

### Phase 3: Features
- [ ] User authentication
- [ ] Saved searches
- [ ] Email notifications
- [ ] Advanced filtering
- [ ] Comparison tool

### Phase 4: Growth
- [ ] Analytics dashboard
- [ ] SEO optimization
- [ ] Multi-language support (English)
- [ ] Consultation booking system

## 🤝 Contributing

This is a private project. For questions or suggestions, contact the project owner.

## 📄 License

Private - All rights reserved

## 🔗 Links

- **GitHub**: https://github.com/byessilyurt/yurtdisi-goc-rehberi
- **Vercel**: https://yurtdisi-goc-rehberi.vercel.app (after deployment)
- **Supabase**: Configure in Settings

## 📧 Support

For technical issues or questions, refer to the documentation files or contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Supabase
