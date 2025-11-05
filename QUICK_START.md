# Quick Start Guide - Yurtdışı Göç Rehberi

## ✅ What's Done

- ✅ Code pushed to GitHub: [https://github.com/byessilyurt/yurtdisi-goc-rehberi](https://github.com/byessilyurt/yurtdisi-goc-rehberi)
- ✅ Vercel project created and linked
- ✅ Initial deployment attempted

## 🚀 Next Steps to Complete Deployment

### 1. Set Up Supabase (5 minutes)

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Click **"New Project"**
3. Enter details:
   - **Name**: `yurtdisi-goc-rehberi`
   - **Database Password**: Choose and save a strong password
   - **Region**: `Europe (Frankfurt)` (closest to Turkey)
4. Click **"Create new project"** and wait ~2 minutes

### 2. Get Supabase Credentials

**Database URL:**
1. In Supabase: **Settings** > **Database** > **Connection string**
2. Copy **Connection pooling** (Transaction mode)
3. Replace `[YOUR-PASSWORD]` with your database password
4. Example: `postgresql://postgres.xxx:YOUR_PASSWORD@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`

**API Keys:**
1. In Supabase: **Settings** > **API**
2. Copy:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public** key: `eyJhbGc...`

### 3. Add Environment Variables to Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project: **yurtdisi-goc-rehberi**
3. Go to **Settings** > **Environment Variables**
4. Add these three variables (for all environments: Production, Preview, Development):

   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Your Supabase connection string |
   | `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |

5. Click **"Save"** for each

**Option B: Using Vercel CLI**

\`\`\`bash
# Add DATABASE_URL
vercel env add DATABASE_URL

# Add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_URL

# Add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
\`\`\`

For each command:
- Paste the value when prompted
- Select all environments (Production, Preview, Development)

### 4. Redeploy

After adding environment variables:

**Option A: Using Vercel Dashboard**
1. Go to **Deployments** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**

**Option B: Using CLI**
\`\`\`bash
vercel --prod
\`\`\`

### 5. Initialize Database

Once deployed successfully, initialize your database tables:

\`\`\`bash
# Pull environment variables from Vercel
vercel env pull .env.production

# Run Prisma migration
npx prisma db push
\`\`\`

## 🎉 You're Live!

Your app will be available at:
- **Production**: `https://yurtdisi-goc-rehberi.vercel.app`
- **Custom Domain**: Can be configured in Vercel Settings

## 📝 Important Notes

### Current State
- ✅ Application fully functional locally
- ✅ Code on GitHub with automatic deployments
- ✅ Vercel project created
- ⏳ Needs environment variables to complete deployment
- ⏳ Database needs initialization

### What Works Without Database
- Landing page
- Modal form (stores data in localStorage)
- All UI components
- Client-side recommendation engine

### What Needs Database
- Saving user profiles to database
- Admin panel for managing countries
- Storing consultation requests
- Real-time country data updates

## 🔄 Automatic Deployments

After initial setup:
- **Push to main branch** → Auto-deploy to production
- **Create PR** → Auto-deploy preview URL
- **Merge PR** → Auto-deploy to production

## 📚 Detailed Guides

- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Complete Supabase setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [README.md](./README.md) - Project overview and local development

## 🐛 Troubleshooting

### Build Failed?
1. Check environment variables are set correctly
2. Verify DATABASE_URL format
3. Check build logs in Vercel Dashboard

### Can't Connect to Database?
1. Verify Supabase credentials
2. Check if Vercel's IP is allowed (it should be by default)
3. Test connection locally first

### Need Help?
- Check the error logs in Vercel Dashboard
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting
- Contact support if issue persists

## 🎯 Next Features to Add

1. **Admin Panel**: Manage countries and visa information
2. **Email Integration**: Send consultation requests
3. **Analytics**: Track user behavior
4. **Blog**: Content marketing
5. **Multi-language**: Add English support
6. **Authentication**: User accounts and saved searches
