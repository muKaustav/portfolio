import type { VercelRequest, VercelResponse } from '@vercel/node'

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'

const getAccessToken = async () => {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN || '',
    }),
  })

  return response.json()
}

const getNowPlaying = async (accessToken: string) => {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (response.status === 204 || response.status > 400) {
    return null
  }

  return response.json()
}

const getRecentlyPlayed = async (accessToken: string) => {
  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (response.status === 204 || response.status > 400) {
    return null
  }

  return response.json()
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30')

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return res.status(500).json({ error: 'Missing Spotify credentials' })
  }

  try {
    const { access_token } = await getAccessToken()

    const nowPlaying = await getNowPlaying(access_token)

    if (nowPlaying && nowPlaying.is_playing && nowPlaying.item) {
      const track = nowPlaying.item
      return res.status(200).json({
        isPlaying: true,
        title: track.name,
        artist: track.artists.map((a: { name: string }) => a.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
      })
    }

    const recentlyPlayed = await getRecentlyPlayed(access_token)

    if (recentlyPlayed && recentlyPlayed.items && recentlyPlayed.items.length > 0) {
      const track = recentlyPlayed.items[0].track
      return res.status(200).json({
        isPlaying: false,
        recentlyPlayed: true,
        title: track.name,
        artist: track.artists.map((a: { name: string }) => a.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
      })
    }

    return res.status(200).json({ isPlaying: false })
  } catch (error) {
    console.error('Spotify API error:', error)
    return res.status(500).json({ error: 'Failed to fetch Spotify data' })
  }
}
