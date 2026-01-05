import { useState, useEffect } from 'react'
import { Typography, Space } from 'antd'
import { CustomerServiceOutlined } from '@ant-design/icons'

const { Text, Link } = Typography

interface SpotifyTrack {
  name: string
  artist: string
  albumArt: string
  url: string
  isPlaying: boolean
}

interface SpotifyNowPlayingProps {
  colors: {
    primary: string
    onSurface: string
    onSurfaceVariant: string
    surfaceContainer: string
    outline: string
  }
}

const SPOTIFY_API_URL = '/api/spotify/now-playing'

export default function SpotifyNowPlaying({ colors }: SpotifyNowPlayingProps) {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch(SPOTIFY_API_URL)
        if (!res.ok) {
          setError(true)
          setLoading(false)
          return
        }
        const data = await res.json()
        if (data.isPlaying || data.recentlyPlayed) {
          setTrack({
            name: data.title || data.name,
            artist: data.artist,
            albumArt: data.albumImageUrl || data.albumArt,
            url: data.songUrl || data.url,
            isPlaying: data.isPlaying,
          })
        }
        setLoading(false)
      } catch {
        setError(true)
        setLoading(false)
      }
    }

    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading || error || !track) {
    return null
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        background: colors.surfaceContainer,
        borderRadius: 12,
        marginTop: 16,
      }}
    >
      {track.albumArt ? (
        <img
          src={track.albumArt}
          alt={track.name}
          style={{ width: 48, height: 48, borderRadius: 8 }}
        />
      ) : (
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            background: colors.outline,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CustomerServiceOutlined style={{ fontSize: 20, color: colors.onSurfaceVariant }} />
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          {track.isPlaying && (
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#1DB954',
                animation: 'pulse 2s infinite',
              }}
            />
          )}
          <Text style={{ color: colors.onSurfaceVariant, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {track.isPlaying ? 'Now Playing' : 'Last Played'}
          </Text>
        </div>
        <Link
          href={track.url}
          target="_blank"
          style={{
            color: colors.onSurface,
            fontWeight: 500,
            fontSize: 14,
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {track.name}
        </Link>
        <Text style={{ color: colors.onSurfaceVariant, fontSize: 13 }}>
          {track.artist}
        </Text>
      </div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#1DB954">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    </div>
  )
}
