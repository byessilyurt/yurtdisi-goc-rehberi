# Add Environment Variables to Vercel

## Quick Method: Vercel Dashboard

1. Go to [https://vercel.com/byessilyurts-projects/yurtdisi-goc-rehberi/settings/environment-variables](https://vercel.com/byessilyurts-projects/yurtdisi-goc-rehberi/settings/environment-variables)

2. Add these **3 environment variables** (click "Add" for each):

### Variable 1: NEXT_PUBLIC_SUPABASE_URL
```
https://yicnbgdulgasifqelwrj.supabase.co
```
✅ Select: Production, Preview, Development

### Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpY25iZ2R1bGdhc2lmcWVsd3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNDg2MzMsImV4cCI6MjA3NzkyNDYzM30.-3w5D0Ljza-qTNXZvaRs5BDqyfsoiTT2Cqboj7aC-MM
```
✅ Select: Production, Preview, Development

### Variable 3: DATABASE_URL
**Get from Supabase:**
1. Open [https://supabase.com/dashboard/project/yicnbgdulgasifqelwrj/settings/database](https://supabase.com/dashboard/project/yicnbgdulgasifqelwrj/settings/database)
2. Find "Connection string" section
3. Click "Connection pooling" tab
4. Copy the **"Transaction Mode"** string
5. It looks like:
```
postgresql://postgres.yicnbgdulgasifqelwrj:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```
6. Replace `[YOUR-PASSWORD]` with your actual database password

✅ Select: Production, Preview, Development

3. Click **"Save"** after adding each variable

## Then Redeploy

After adding all 3 variables:

1. Go to [Deployments](https://vercel.com/byessilyurts-projects/yurtdisi-goc-rehberi)
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**

OR run in terminal:
```bash
vercel --prod
```

## Initialize Database

After successful deployment:

```bash
# Pull the environment variables from Vercel
vercel env pull .env.production

# Run Prisma migration to create tables
npx prisma db push
```

## ✅ Done!

Your app will be live at:
https://yurtdisi-goc-rehberi.vercel.app

---

## Alternative: Using Vercel CLI

If you prefer CLI (must provide values when prompted):

```bash
# Add each variable
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add DATABASE_URL

# Then redeploy
vercel --prod
```
