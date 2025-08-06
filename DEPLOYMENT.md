# Deployment Guide for cv.dvos.me

## Development Setup
Currently running with `npm run dev` for development.

## Production Build & Deployment

### 1. Build the Application
```bash
npm run build
```

### 2. Start Production Server
```bash
npm start
```

### 3. Nginx Proxy Manager Configuration

#### Proxy Host Setup:
- **Domain Names**: `cv.dvos.me`
- **Scheme**: `http`
- **Forward Hostname/IP**: `localhost` (or your server IP)
- **Forward Port**: `3000` (or your Next.js port)
- **Block Common Exploits**: ✅ Enabled
- **Websockets Support**: ✅ Enabled

#### SSL Configuration:
- **SSL Certificate**: Use Let's Encrypt or your existing certificate
- **Force SSL**: ✅ Enabled
- **HTTP/2 Support**: ✅ Enabled

#### Advanced Configuration:
```nginx
# Additional headers for better performance
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

### 4. Environment Variables (Optional)
Create `.env.local` for production:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://cv.dvos.me
```

### 5. Process Management (Recommended)
Use PM2 for process management:
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### 6. Monitoring
- **Health Check**: `https://cv.dvos.me/api/health`
- **Status Page**: Monitor via nginx proxy manager dashboard

## Performance Optimizations

### Built-in Optimizations:
- ✅ Static generation enabled
- ✅ Image optimization with WebP/AVIF
- ✅ Security headers configured
- ✅ Gzip compression enabled
- ✅ SWC minification enabled
- ✅ CSS optimization enabled

### Additional Recommendations:
1. **CDN**: Consider using Cloudflare for global CDN
2. **Caching**: Leverage nginx caching for static assets
3. **Monitoring**: Set up uptime monitoring for cv.dvos.me

## Troubleshooting

### Common Issues:
1. **Port conflicts**: Ensure port 3000 is available
2. **SSL issues**: Check certificate validity in nginx proxy manager
3. **Performance**: Monitor server resources during peak usage

### Logs:
- **Next.js logs**: Check PM2 logs with `pm2 logs portfolio`
- **Nginx logs**: Available in nginx proxy manager interface

## Security Checklist
- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ XSS protection enabled
- ✅ Content type sniffing disabled
- ✅ Frame embedding disabled
- ✅ Permissions policy configured 