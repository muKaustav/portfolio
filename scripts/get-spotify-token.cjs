const http = require('http')
const https = require('https')
const url = require('url')

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI || 'http://127.0.0.1:5000/auth/spotify/callback'
const SCOPES = 'user-read-currently-playing user-read-recently-played'

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('\n❌ Missing environment variables!')
  console.error('Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET before running.\n')
  console.error('Example (PowerShell):')
  console.error('  $env:SPOTIFY_CLIENT_ID="your_client_id"')
  console.error('  $env:SPOTIFY_CLIENT_SECRET="your_client_secret"')
  console.error('  node scripts/get-spotify-token.cjs\n')
  process.exit(1)
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true)
  
  if (parsedUrl.pathname === '/') {
    const authUrl = `https://accounts.spotify.com/authorize?` +
      `client_id=${CLIENT_ID}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&scope=${encodeURIComponent(SCOPES)}`
    
    res.writeHead(302, { Location: authUrl })
    res.end()
  } else if (parsedUrl.pathname === '/auth/spotify/callback') {
    const code = parsedUrl.query.code
    
    if (!code) {
      res.writeHead(400)
      res.end('No code received')
      return
    }

    const tokenData = await new Promise((resolve, reject) => {
      const postData = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }).toString()

      const options = {
        hostname: 'accounts.spotify.com',
        path: '/api/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
          'Content-Length': Buffer.byteLength(postData),
        },
      }

      const tokenReq = https.request(options, (tokenRes) => {
        let data = ''
        tokenRes.on('data', chunk => data += chunk)
        tokenRes.on('end', () => resolve(JSON.parse(data)))
      })

      tokenReq.on('error', reject)
      tokenReq.write(postData)
      tokenReq.end()
    })

    if (tokenData.error) {
      res.writeHead(400)
      res.end(`Error: ${tokenData.error_description}`)
      return
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Spotify Token Generated</title>
          <style>
            body { font-family: system-ui; max-width: 600px; margin: 50px auto; padding: 20px; background: #1a1a1a; color: #e0e0e0; }
            h1 { color: #1DB954; }
            .token { background: #2d2d2d; padding: 15px; border-radius: 8px; word-break: break-all; margin: 10px 0; }
            .label { color: #888; font-size: 12px; text-transform: uppercase; margin-top: 20px; }
            code { color: #1DB954; }
          </style>
        </head>
        <body>
          <h1>✓ Success!</h1>
          <p>Add these to your Vercel environment variables:</p>
          
          <div class="label">SPOTIFY_CLIENT_ID</div>
          <div class="token"><code>${CLIENT_ID}</code></div>
          
          <div class="label">SPOTIFY_CLIENT_SECRET</div>
          <div class="token"><code>${CLIENT_SECRET}</code></div>
          
          <div class="label">SPOTIFY_REFRESH_TOKEN (save this!)</div>
          <div class="token"><code>${tokenData.refresh_token}</code></div>
          
          <p style="margin-top: 30px; color: #888;">You can close this window and stop the server (Ctrl+C).</p>
        </body>
      </html>
    `)

    console.log('\n✓ Refresh token obtained successfully!')
    console.log('\nAdd these environment variables to Vercel:\n')
    console.log(`SPOTIFY_CLIENT_ID=${CLIENT_ID}`)
    console.log(`SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`)
    console.log(`SPOTIFY_REFRESH_TOKEN=${tokenData.refresh_token}`)
    console.log('\n')
  } else {
    res.writeHead(404)
    res.end('Not found')
  }
})

const PORT = 5000
server.listen(PORT, '127.0.0.1', () => {
  console.log('\n🎵 Spotify Token Generator\n')
  console.log(`Open this URL in your browser:\n`)
  console.log(`  http://127.0.0.1:${PORT}\n`)
  console.log('Waiting for authorization...\n')
})
