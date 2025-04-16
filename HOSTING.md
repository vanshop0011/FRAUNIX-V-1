# 24/7 Free Hosting Guide for Discord Bot

This guide will help you host your Discord bot 24/7 for free using Replit and UptimeRobot.

## Method 1: Replit + UptimeRobot (Recommended)

### Step 1: Host on Replit
1. Create a free account on [Replit](https://replit.com/)
2. Create a new Node.js project
3. Upload your bot files to Replit
4. Set up your environment variables:
   - Click on "Tools" > "Secrets"
   - Add a new secret with key `TOKEN` and value `your_bot_token`
5. Click the "Run" button to start your bot

### Step 2: Set up UptimeRobot
1. Create a free account on [UptimeRobot](https://uptimerobot.com/)
2. Add a new monitor:
   - Monitor Type: HTTP(s)
   - Friendly Name: Your Bot Name
   - URL: Your Replit URL (e.g., `https://your-bot-name.your-username.repl.co`)
   - Monitoring Interval: 5 minutes
3. Click "Create Monitor"

### Step 3: Keep Replit Alive
- UptimeRobot will ping your Replit URL every 5 minutes, keeping your bot online
- Replit's free tier has limitations, but this method works well for most bots

## Method 2: Oracle Cloud Free Tier

Oracle Cloud offers a free tier with 2 AMD-based Compute VMs with 1/8 OCPU and 1GB memory each, which is perfect for hosting a Discord bot.

1. Sign up for a free Oracle Cloud account
2. Create a new VM instance
3. Install Node.js on your VM
4. Upload your bot files
5. Use PM2 to keep your bot running:
   ```
   npm install -g pm2
   pm2 start index.js
   pm2 startup
   ```

## Method 3: Railway.app

Railway.app offers a free tier with limited usage:

1. Create an account on [Railway](https://railway.app/)
2. Connect your GitHub repository
3. Deploy your bot
4. Set up your environment variables

## Troubleshooting

- If your bot goes offline, check the logs in Replit
- Make sure your bot token is correctly set in the environment variables
- If using UptimeRobot, ensure the URL is correct and accessible

## Additional Tips

- Consider using a process manager like PM2 for better reliability
- Set up error logging to a service like Sentry
- Regularly backup your bot's data 