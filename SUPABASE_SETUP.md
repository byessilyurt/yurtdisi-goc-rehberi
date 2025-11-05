# Supabase Setup Guide

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization (or create one)
4. Enter project details:
   - **Name**: `yurtdisi-goc-rehberi` (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest to your users (eu-central-1 for Turkey/Europe)
   - **Pricing Plan**: Start with Free tier
5. Click "Create new project" and wait ~2 minutes

## Step 2: Get Connection Details

### For Prisma (Database URL):
1. Go to **Project Settings** > **Database**
2. Find **Connection string** section
3. Copy the **Connection Pooling** URL (recommended) or **Direct connection** URL
4. Replace `[YOUR-PASSWORD]` with your database password
5. Add `?pgbouncer=true` at the end if using Connection Pooling

### For Supabase Client (API Keys):
1. Go to **Project Settings** > **API**
2. Copy:
   - **Project URL** (starts with https://xxxxx.supabase.co)
   - **Project API keys** > **anon** **public** key

## Step 3: Update Environment Variables

Create a `.env` file in the project root (copy from `.env.example`):

\`\`\`env
DATABASE_URL="postgresql://postgres.xxxxx:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres?pgbouncer=true"
NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGc..."
\`\`\`

## Step 4: Run Prisma Migrations

Generate Prisma client and create database tables:

\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

## Step 5: (Optional) Seed Database with Mock Data

If you want to populate the database with the mock countries data:

\`\`\`bash
npx prisma db seed
\`\`\`

## Step 6: Verify Connection

Run the development server and check for any database connection errors:

\`\`\`bash
npm run dev
\`\`\`

## Supabase Features You Can Use

### Row Level Security (RLS)
For production, enable RLS on your tables:
1. Go to **Database** > **Tables**
2. Click on a table
3. Enable RLS and create policies

### Authentication
If you want to add user authentication later:
- Supabase provides built-in auth with email, OAuth, magic links
- Already integrated via `@supabase/supabase-js`

### Storage
For storing country images:
- Use Supabase Storage instead of external URLs
- Go to **Storage** > **Create bucket**

### Realtime (Optional)
Enable realtime updates for collaborative features

## Troubleshooting

### Connection Issues
- Check if your IP is allowed (Supabase > Project Settings > Database > Connection pooling)
- Verify the DATABASE_URL format
- Ensure password doesn't contain special characters that need URL encoding

### Prisma Issues
- Run `npx prisma generate` after any schema changes
- Use `npx prisma studio` to view/edit data visually
- Check Prisma logs: `DATABASE_URL="..." npx prisma db push --debug`

## Production Checklist

Before deploying to production:
- [ ] Enable Row Level Security on all tables
- [ ] Set up proper backup strategy
- [ ] Enable SSL enforcement
- [ ] Configure rate limiting
- [ ] Set up monitoring and alerts
- [ ] Create API keys for different environments
- [ ] Review and optimize database indexes
