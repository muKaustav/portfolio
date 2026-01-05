import { useState, useEffect } from 'react'
import { ConfigProvider, Timeline, Tag, Typography, Space, Switch, theme } from 'antd'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import SpotifyNowPlaying from './SpotifyNowPlaying'

const { Text, Title, Paragraph, Link } = Typography

const materialColors = {
  light: {
    primary: '#1a73e8',
    onPrimary: '#ffffff',
    primaryContainer: '#d3e3fd',
    secondary: '#5f6368',
    surface: '#ffffff',
    surfaceContainer: '#f1f3f4',
    onSurface: '#1f1f1f',
    onSurfaceVariant: '#5f6368',
    outline: '#dadce0',
    outlineVariant: '#e8eaed',
  },
  dark: {
    primary: '#8ab4f8',
    onPrimary: '#062e6f',
    primaryContainer: '#0842a0',
    secondary: '#9aa0a6',
    surface: '#1f1f1f',
    surfaceContainer: '#2d2d2d',
    onSurface: '#e3e3e3',
    onSurfaceVariant: '#9aa0a6',
    outline: '#5f6368',
    outlineVariant: '#3c4043',
  },
}

interface Highlight {
  project?: string
  desc: string
}

interface Experience {
  company: string
  role: string
  period: string
  isCurrent: boolean
  highlights: Highlight[]
}

const experiences: Experience[] = [
  {
    company: 'Acko',
    role: 'SDE 1 · Central Data Team',
    period: '2024 – Present',
    isCurrent: true,
    highlights: [
      { project: 'Reach.r', desc: 'Audience management platform with Discover Page (attribute catalog) and Models Page (data mart catalog with category-based filtering) for Marketing/Business teams.' },
      { project: 'Muxor', desc: 'Near real-time audience segmentation engine synchronizing Segment events with user profiles, reducing campaign targeting latency from batch (hours/daily) to near real-time.' },
      { project: 'QueryQ', desc: 'Self-service BigQuery query management platform with scheduling, dependency orchestration, cost controls, and AI Assist for suggesting data quality checks.' },
      { project: 'OpenMetadata', desc: 'Organization-wide data discovery platform with PostgreSQL, Elasticsearch, and MCP server integration for AI agent access.' },
      { project: 'Sentinel', desc: 'Data quality service with Soda Core integration supporting row count, null checks, uniqueness and freshness.' },
      { project: 'Projector', desc: 'Unified backend platform hosting data services, also implemented MCP server exposing tools to AI agents.' },
      { project: 'Aether', desc: 'Multi-agent orchestrator built with Google ADK for Discovery, Modeling, Prediction, Activation, and Operations agents with dynamic MCP tool discovery.' },
    ],
  },
  {
    company: 'Yahoo',
    role: 'Associate SWE',
    period: 'Jan 2023 – Sep 2024',
    isCurrent: false,
    highlights: [
      { desc: 'Migrated legacy ETL workflows from IBM DataStage to Apache Airflow, improving pipeline maintainability, observability, and developer velocity.' },
      { desc: 'Built FastAPI async APIs, paired with multiple Gunicorn workers, that reduced latency from 72 seconds to 1.02 seconds (70x improvement), enabling near real-time data access.' },
      { desc: 'Developed cloud-based monitoring infrastructure for the DSP (Ads) team, enabling proactive issue detection and faster incident response.' },
    ],
  },
]

const links = [
  { label: 'Resume', href: 'https://drive.google.com/file/d/1AdANGwhOY-DEKzm1W6f1er-CxKYwPF0G/view?usp=sharing', text: 'KM_resume.pdf' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kaustavmukhopadhyay/', text: '@kaustavmukhopadhyay' },
  { label: 'GitHub', href: 'https://github.com/muKaustav', text: '@muKaustav' },
  { label: 'Leetcode', href: 'https://leetcode.com/muKaustav/', text: '@muKaustav' },
  { label: 'Email', href: 'mailto:mu.kaustav@gmail.com', text: 'mu.kaustav@gmail.com' },
]

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  const colors = isDark ? materialColors.dark : materialColors.light

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.body.style.background = colors.surface
    document.body.style.transition = 'background 0.2s ease'
    document.documentElement.style.setProperty('--bullet-color', isDark ? '#ffffff' : colors.primary)
  }, [isDark, colors.surface, colors.primary])

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: colors.primary,
          colorBgContainer: colors.surfaceContainer,
          colorText: colors.onSurface,
          colorTextSecondary: colors.onSurfaceVariant,
          colorBorder: colors.outline,
          borderRadius: 12,
          fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, sans-serif',
        },
        components: {
          Timeline: {
            dotBg: colors.surfaceContainer,
          },
          Tag: {
            borderRadiusSM: 8,
          },
          Switch: {
            colorPrimary: colors.primary,
            colorPrimaryHover: colors.primary,
          },
        },
      }}
    >
      <main
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: 'clamp(16px, 5vw, 24px)',
          minHeight: '100vh',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 16,
            marginBottom: 24,
            borderBottom: `1px solid ${colors.outlineVariant}`,
          }}
        >
          <Title level={3} style={{ margin: 0, color: colors.onSurface, fontWeight: 600 }}>
            Kaustav Mukhopadhyay
          </Title>
          <Switch
            checked={isDark}
            onChange={setIsDark}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </div>

        {/* About */}
        <section style={{ marginBottom: 32 }}>
          <Paragraph style={{ color: colors.onSurfaceVariant, lineHeight: 1.75, marginBottom: 12 }}>
            SDE 1 acting as a Platform Engineer, building internal data products that democratize data access. I specialize in self-service data platforms, real-time infrastructure, and AI-powered tooling for complex data warehouses.
          </Paragraph>
          <Paragraph style={{ color: colors.onSurfaceVariant, lineHeight: 1.75, marginBottom: 12 }}>
            Currently at Acko's Central Data Team, I build platforms like QueryQ (query scheduling & management), Muxor (near real-time audience segmentation), and Sentinel (data quality monitoring) for internal teams. Previously at Yahoo, I modernized ETL pipelines and achieved 70x API latency improvements.
          </Paragraph>
          <Paragraph style={{ color: colors.onSurfaceVariant, lineHeight: 1.75, marginBottom: 0 }}>
            Outside of work, I play the guitar, enjoy story shooters like Call of Duty, and I'm an amateur cinephile. I also love reading and have worked through a considerable collection of Murakami's literary works.
          </Paragraph>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: 32 }}>
          <Title
            level={5}
            style={{
              color: colors.onSurface,
              fontWeight: 700,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 16,
            }}
          >
            Experience
          </Title>

          <Timeline
            items={experiences.map((exp) => ({
              color: exp.isCurrent ? colors.primary : colors.outline,
              children: (
                <div style={{ paddingBottom: 8 }}>
                  <Space size={8} wrap style={{ marginBottom: 4 }}>
                    <Text style={{ color: colors.onSurface, fontSize: 16, fontWeight: 600 }}>{exp.company}</Text>
                    <Tag
                      bordered={false}
                      style={{
                        borderRadius: 16,
                        fontSize: 12,
                        fontWeight: 500,
                        background: exp.isCurrent ? colors.primaryContainer : colors.surfaceContainer,
                        color: exp.isCurrent ? colors.primary : colors.onSurfaceVariant,
                      }}
                    >
                      {exp.role}
                    </Tag>
                  </Space>
                  <div style={{ color: colors.onSurfaceVariant, fontSize: 13, marginBottom: 8, fontWeight: 400 }}>
                    {exp.period}
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ marginBottom: 8, color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6 }}>
                        {h.project ? (
                          <>
                            <strong style={{ color: colors.onSurface, fontWeight: 600 }}>{h.project}</strong>
                            {': '}
                            {h.desc}
                          </>
                        ) : (
                          h.desc
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
          />
        </section>

        {/* Links */}
        <section style={{ marginBottom: 32 }}>
          <Title
            level={5}
            style={{
              color: colors.onSurface,
              fontWeight: 700,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 16,
            }}
          >
            Links
          </Title>

          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {links.map((link) => (
              <li key={link.label} style={{ marginBottom: 8, fontSize: 14 }}>
                <span style={{ color: colors.onSurface, fontWeight: 500 }}>{link.label}:</span>{' '}
                <Link href={link.href} target="_blank" style={{ color: colors.primary, fontWeight: 400 }}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Spotify */}
        <SpotifyNowPlaying colors={colors} />

        {/* Footer */}
        <footer style={{ paddingTop: 16, marginTop: 32, borderTop: `1px solid ${colors.outlineVariant}` }}>
          <Text style={{ color: colors.onSurfaceVariant, fontSize: 12 }}>
            © 2026 Kaustav Mukhopadhyay
          </Text>
        </footer>
      </main>
    </ConfigProvider>
  )
}
