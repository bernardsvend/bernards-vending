# Bernard's Vending - Auto-Blog Setup Guide

## Quick Start Checklist

- [ ] Create GitHub account & repository
- [ ] Create Vercel account (sign up with GitHub)
- [ ] Create OpenAI account & get API key
- [ ] Set up n8n (cloud or self-hosted)
- [ ] Import workflow & configure credentials

---

## Step 1: Push Your Site to GitHub

### 1.1 Create GitHub Account
Go to https://github.com and sign up (free).

### 1.2 Install Git
Download from https://git-scm.com/downloads and install.

### 1.3 Initialize Your Repository
Open Command Prompt in your project folder and run:

```bash
cd "C:\Users\office\Desktop\Bernards Vending Website"
git init
git add .
git commit -m "Initial commit"
```

### 1.4 Create Repository on GitHub
1. Go to https://github.com/new
2. Name it `bernards-vending`
3. Leave it Public (required for free Vercel)
4. Don't add README (you already have one)
5. Click "Create repository"

### 1.5 Push Your Code
```bash
git remote add origin https://github.com/YOUR_USERNAME/bernards-vending.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

1. Go to https://vercel.com and click "Sign Up"
2. Choose "Continue with GitHub"
3. Click "Add New Project"
4. Import your `bernards-vending` repository
5. Vercel will auto-detect Vite - click "Deploy"
6. Wait 1-2 minutes for build
7. Your site is live at `bernards-vending.vercel.app`

### Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add `bernardsvending.com`
4. Update your domain's DNS at your registrar

---

## Step 3: Set Up n8n

### Option A: n8n Cloud (Easiest - $20/mo)
1. Go to https://n8n.io/cloud
2. Sign up for free trial
3. Skip to Step 4

### Option B: Self-Hosted Free (Railway)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" > "Deploy a Template"
4. Search for "n8n" and deploy
5. Follow prompts to set admin password

### Option C: Self-Hosted Free (Render)
1. Go to https://render.com
2. Sign up with GitHub
3. New > Web Service
4. Use Docker image: `n8nio/n8n`
5. Free tier has sleep (wakes on request)

---

## Step 4: Get Your API Keys

### OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Name it "Bernard's Blog"
4. Copy the key (starts with `sk-`)
5. Add $5-10 credits at https://platform.openai.com/settings/organization/billing

### GitHub Personal Access Token
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "n8n blog automation"
4. Expiration: 90 days (or custom)
5. Scopes: Check `repo` (full control)
6. Click "Generate token"
7. Copy the token (starts with `ghp_`)

---

## Step 5: Import the n8n Workflow

1. Open your n8n instance
2. Click "Add Workflow" (+ button)
3. Click the three dots menu (top right)
4. Select "Import from File"
5. Upload `n8n-blog-workflow.json` from your project folder

### Configure Credentials in n8n

#### OpenAI Credential
1. Go to Credentials > Add Credential
2. Search "OpenAI"
3. Paste your API key
4. Save

#### GitHub Credential
1. Go to Credentials > Add Credential
2. Search "GitHub"
3. Authentication: Personal Access Token
4. Token: Paste your `ghp_` token
5. Save

#### Update Workflow Nodes
1. Click "Generate Blog Post" node
2. Select your OpenAI credential
3. Click "Commit to GitHub" node
4. Select your GitHub credential
5. Update `repository` to your repo name
6. Update `owner` to your GitHub username

---

## Step 6: Test the Workflow

1. Click "Execute Workflow" button (play icon)
2. Watch each node execute
3. Check your GitHub repo for new file in `blog-posts/`
4. Check Vercel for automatic redeploy
5. Visit your site to see new blog post

---

## Step 7: Activate the Workflow

1. Toggle the "Active" switch (top right)
2. The workflow will now run:
   - Every Monday at 9am
   - When RSS feed has new items

---

## How Blog Posts Work

### File Structure
```
blog-posts/
├── top-10-snacks-boost-office-productivity.json
├── why-free-vending-services-save-money.json
├── shift-to-healthy-vending-options.json
└── [new-posts-added-automatically].json
```

### Post Format
Each JSON file contains:
```json
{
  "id": "unique-id",
  "title": "Blog Post Title",
  "excerpt": "Short description for listing",
  "content": "<p>HTML content...</p>",
  "image": "https://picsum.photos/800/400?random=123",
  "date": "Dec 11, 2024",
  "category": "Business Tips",
  "slug": "url-friendly-slug"
}
```

### Adding Posts Manually
1. Create new `.json` file in `blog-posts/`
2. Follow the format above
3. Commit and push to GitHub
4. Vercel auto-deploys in ~1 minute

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Vercel Hobby | $0 | Free tier |
| GitHub | $0 | Free for public repos |
| n8n Cloud | $20/mo | Or self-host free |
| OpenAI | ~$0.10/post | GPT-4o-mini pricing |
| Domain | ~$12/year | Optional |

**Total: $0-20/month**

---

## Troubleshooting

### "Workflow failed at OpenAI node"
- Check API key is valid
- Ensure you have credits in OpenAI account

### "GitHub commit failed"
- Token may have expired - regenerate
- Check repository name matches exactly
- Ensure token has `repo` scope

### "Site not updating after commit"
- Check Vercel dashboard for build errors
- May take 1-2 minutes to deploy

### "Blog posts not showing"
- Your Resources.tsx needs to be updated to read from blog-posts folder
- See next section

---

## Next Steps

Your current site reads blog posts from `constants.ts`. To make it read from the `blog-posts/` folder dynamically, you'll need to update the Resources page.

Want me to update your site code to read from the JSON files automatically?
