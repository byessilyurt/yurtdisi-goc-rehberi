# Deployment Guide

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
\`\`\`bash
npm install -g vercel
\`\`\`

2. **Login to Vercel**:
\`\`\`bash
vercel login
\`\`\`

3. **Deploy**:
\`\`\`bash
vercel
\`\`\`

4. **Add Environment Variables** in Vercel Dashboard:
   - Go to your project in Vercel Dashboard
   - Settings > Environment Variables
   - Add:
     - `DATABASE_URL` (from Supabase)
     - `NEXT_PUBLIC_SUPABASE_URL` (from Supabase)
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (from Supabase)

5. **Redeploy** to apply environment variables:
\`\`\`bash
vercel --prod
\`\`\`

### Option 2: Using Vercel Dashboard

1. Go to [https://vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** > **"Project"**
3. Import your GitHub repository: `byessilyurt/yurtdisi-goc-rehberi`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `prisma generate && next build`
   - **Output Directory**: `.next`
5. Add **Environment Variables**:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click **"Deploy"**

### Option 3: Using GitHub Integration

1. Connect your GitHub repository to Vercel
2. Every push to `main` branch will auto-deploy
3. Pull requests will get preview deployments

## Post-Deployment Steps

### 1. Run Database Migrations

After first deployment, run migrations in Vercel dashboard:

1. Go to **Settings** > **Functions**
2. Add a deployment script or manually run:
\`\`\`bash
npx prisma db push
\`\`\`

Or use the Vercel CLI:
\`\`\`bash
vercel env pull .env.production
DATABASE_URL=\$(cat .env.production | grep DATABASE_URL | cut -d '=' -f2) npx prisma db push
\`\`\`

### 2. Configure Custom Domain (Optional)

1. Go to **Settings** > **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

### 3. Set up Analytics (Optional)

Enable Vercel Analytics:
1. Go to **Analytics** tab
2. Click **"Enable Analytics"**
3. Install package (already included):
\`\`\`bash
npm install @vercel/analytics
\`\`\`

### 4. Configure Speed Insights (Optional)

Enable Vercel Speed Insights:
1. Go to **Speed Insights** tab
2. Click **"Enable Speed Insights"**

## Environment Variables Reference

### Required for Production

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Supabase PostgreSQL connection string | `postgresql://postgres.xxx:password@...` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGc...` |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL | Auto-detected |
| `VERCEL_ENV` | Environment type | Auto-set by Vercel |

## Continuous Deployment

### Automatic Deployments

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests to any branch
- **Development**: Manual deployments

### Branch Protection

Recommended GitHub branch protection rules for `main`:
- Require pull request reviews
- Require status checks to pass
- Require branches to be up to date

### Preview Deployments

Every PR gets a unique preview URL:
- Test changes before merging
- Share with team/stakeholders
- Environment variables from production

## Monitoring & Debugging

### View Logs

\`\`\`bash
vercel logs [deployment-url]
\`\`\`

Or in Vercel Dashboard:
1. Go to **Deployments**
2. Click on a deployment
3. View **Function Logs** or **Build Logs**

### Check Build Status

\`\`\`bash
vercel inspect [deployment-url]
\`\`\`

### Rollback Deployment

In Vercel Dashboard:
1. Go to **Deployments**
2. Find previous working deployment
3. Click **"..."** > **"Promote to Production"**

## Performance Optimization

### Enable Edge Functions

For faster response times, consider using Edge Runtime:
1. Add to API routes:
\`\`\`typescript
export const runtime = 'edge';
\`\`\`

### Enable ISR (Incremental Static Regeneration)

For country pages that don't change often:
\`\`\`typescript
export const revalidate = 3600; // Revalidate every hour
\`\`\`

### Image Optimization

Next.js automatically optimizes images through Vercel:
- WebP/AVIF formats
- Responsive sizes
- Lazy loading

## Troubleshooting

### Build Fails

1. Check build logs in Vercel Dashboard
2. Verify all environment variables are set
3. Test build locally:
\`\`\`bash
npm run build
\`\`\`

### Database Connection Issues

1. Verify `DATABASE_URL` is correct
2. Check Supabase connection pooling settings
3. Ensure Vercel's IP is allowed in Supabase

### Environment Variables Not Working

1. Ensure they're added to correct environment (Production/Preview/Development)
2. Redeploy after adding variables
3. Clear build cache if needed

## Security Checklist

- [ ] Enable Vercel Authentication for sensitive pages
- [ ] Set up proper CORS policies
- [ ] Configure security headers
- [ ] Enable rate limiting
- [ ] Set up monitoring/alerts
- [ ] Regular dependency updates
- [ ] Enable automatic security updates on GitHub

## Cost Optimization

### Vercel Free Tier Limits

- 100 GB bandwidth/month
- Unlimited deployments
- 100 GB-hours compute time
- 6000 build minutes/month

### Tips to Stay Within Free Tier

- Optimize images
- Enable ISR for static content
- Use edge functions wisely
- Monitor usage in Dashboard

## Next Steps

1. ✅ Deploy to Vercel
2. Set up custom domain
3. Configure email notifications
4. Add analytics
5. Set up monitoring
6. Enable automatic backups
7. Configure CDN caching
8. Set up staging environment
