import { useState, useEffect } from 'react'
import { ConfigProvider, Typography, Switch, theme } from 'antd'
import SpotifyNowPlaying from './SpotifyNowPlaying'

const { Text, Title, Paragraph, Link } = Typography

/**
 * Material Design 3 style tokens (https://m3.material.io/styles)
 * Color schemes follow the M3 color role system with the full
 * surface-container hierarchy, seeded from Google Blue.
 */
export interface M3ColorScheme {
	primary: string
	onPrimary: string
	primaryContainer: string
	onPrimaryContainer: string
	secondary: string
	onSecondary: string
	secondaryContainer: string
	onSecondaryContainer: string
	tertiary: string
	onTertiary: string
	tertiaryContainer: string
	onTertiaryContainer: string
	surface: string
	surfaceDim: string
	surfaceBright: string
	surfaceContainerLowest: string
	surfaceContainerLow: string
	surfaceContainer: string
	surfaceContainerHigh: string
	surfaceContainerHighest: string
	onSurface: string
	onSurfaceVariant: string
	outline: string
	outlineVariant: string
	inverseSurface: string
	inverseOnSurface: string
	inversePrimary: string
}

const m3Color: { light: M3ColorScheme; dark: M3ColorScheme } = {
	light: {
		primary: '#0b57d0',
		onPrimary: '#ffffff',
		primaryContainer: '#d3e3fd',
		onPrimaryContainer: '#041e49',
		secondary: '#00639b',
		onSecondary: '#ffffff',
		secondaryContainer: '#c2e7ff',
		onSecondaryContainer: '#001d35',
		tertiary: '#146c2e',
		onTertiary: '#ffffff',
		tertiaryContainer: '#c4eed0',
		onTertiaryContainer: '#072711',
		surface: '#ffffff',
		surfaceDim: '#d3dbe5',
		surfaceBright: '#ffffff',
		surfaceContainerLowest: '#ffffff',
		surfaceContainerLow: '#f8fafd',
		surfaceContainer: '#f0f4f9',
		surfaceContainerHigh: '#e9eef6',
		surfaceContainerHighest: '#dde3ea',
		onSurface: '#1f1f1f',
		onSurfaceVariant: '#444746',
		outline: '#747775',
		outlineVariant: '#c4c7c5',
		inverseSurface: '#303030',
		inverseOnSurface: '#f2f2f2',
		inversePrimary: '#a8c7fa',
	},
	dark: {
		primary: '#a8c7fa',
		onPrimary: '#062e6f',
		primaryContainer: '#0842a0',
		onPrimaryContainer: '#d3e3fd',
		secondary: '#7fcfff',
		onSecondary: '#003355',
		secondaryContainer: '#004a77',
		onSecondaryContainer: '#c2e7ff',
		tertiary: '#6dd58c',
		onTertiary: '#0a3818',
		tertiaryContainer: '#0f5223',
		onTertiaryContainer: '#c4eed0',
		surface: '#131314',
		surfaceDim: '#131314',
		surfaceBright: '#37393b',
		surfaceContainerLowest: '#0e0e0e',
		surfaceContainerLow: '#1b1b1b',
		surfaceContainer: '#1e1f20',
		surfaceContainerHigh: '#282a2c',
		surfaceContainerHighest: '#333537',
		onSurface: '#e3e3e3',
		onSurfaceVariant: '#c4c7c5',
		outline: '#8e918f',
		outlineVariant: '#444746',
		inverseSurface: '#e3e3e3',
		inverseOnSurface: '#303030',
		inversePrimary: '#0b57d0',
	},
}

/** M3 type scale tokens (Roboto; regular for display/body, medium for title/label). */
const typescale = {
	headlineSmall: { fontSize: 24, lineHeight: '32px', fontWeight: 400, letterSpacing: 0 },
	titleLarge: { fontSize: 22, lineHeight: '28px', fontWeight: 500, letterSpacing: 0 },
	titleMedium: { fontSize: 16, lineHeight: '24px', fontWeight: 500, letterSpacing: '0.15px' },
	titleSmall: { fontSize: 14, lineHeight: '20px', fontWeight: 500, letterSpacing: '0.1px' },
	bodyLarge: { fontSize: 16, lineHeight: '26px', fontWeight: 400, letterSpacing: '0.35px' },
	bodyMedium: { fontSize: 14, lineHeight: '22px', fontWeight: 400, letterSpacing: '0.25px' },
	bodySmall: { fontSize: 12, lineHeight: '16px', fontWeight: 400, letterSpacing: '0.4px' },
	labelLarge: { fontSize: 14, lineHeight: '20px', fontWeight: 500, letterSpacing: '0.1px' },
	labelMedium: { fontSize: 12, lineHeight: '16px', fontWeight: 500, letterSpacing: '0.5px' },
	labelSmall: { fontSize: 11, lineHeight: '16px', fontWeight: 500, letterSpacing: '0.5px' },
} as const

/** M3 shape scale (corner radius tokens). */
const shape = {
	extraSmall: 4,
	small: 8,
	medium: 12,
	large: 16,
	extraLarge: 28,
	full: 9999,
} as const

/** M3 motion tokens: easing + duration. */
const motion = {
	easing: {
		standard: 'cubic-bezier(0.2, 0, 0, 1)',
		standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
		emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
	},
	duration: {
		short4: '200ms',
		medium2: '300ms',
		long2: '500ms',
	},
} as const

/** M3 elevation: tonal surface containers first; shadows only for extra separation. */
const elevation = {
	level0: 'none',
	level1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
	level2: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
} as const

export const m3 = { shape, motion, elevation, typescale }

/** Material Symbols icon (M3 icons style). */
function MSymbol({
	name,
	size = 20,
	style,
}: {
	name: string
	size?: number
	style?: React.CSSProperties
}) {
	return (
		<span
			className="material-symbols-rounded"
			style={{ fontSize: size, ...style }}
			aria-hidden="true">
			{name}
		</span>
	)
}

/** Company tile as a plain Pantone color swatch, harmonized with the M3 scheme. */
function LogoTile({ logo }: { logo: { bg: string } }) {
	return (
		<div
			style={{
				width: 48,
				height: 48,
				flexShrink: 0,
				borderRadius: shape.small,
				background: logo.bg,
			}}
		/>
	)
}

interface Highlight {
	project?: string
	desc: string
}

interface Role {
	title: string
	/** 'YYYY-MM' */
	start: string
	/** 'YYYY-MM' or null when current */
	end: string | null
	highlights: Highlight[]
	skills?: string
}

interface Experience {
	company: string
	employmentType: 'Full-time' | 'Internship'
	location: string
	logo: { bg: string }
	roles: Role[]
}

const MONTH_NAMES = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function formatYM(ym: string): string {
	const [y, m] = ym.split('-').map(Number)
	return `${MONTH_NAMES[m - 1]} ${y}`
}

/** LinkedIn-style inclusive duration, e.g. '1 yr 8 mos'. */
function durationStr(start: string, end: string | null): string {
	const [sy, sm] = start.split('-').map(Number)
	const now = new Date()
	const [ey, em] = end
		? end.split('-').map(Number)
		: [now.getFullYear(), now.getMonth() + 1]
	const total = (ey - sy) * 12 + (em - sm) + 1
	const yrs = Math.floor(total / 12)
	const mos = total % 12
	const parts: string[] = []
	if (yrs > 0) parts.push(`${yrs} yr${yrs > 1 ? 's' : ''}`)
	if (mos > 0) parts.push(`${mos} mo${mos > 1 ? 's' : ''}`)
	return parts.join(' ') || '1 mo'
}

function periodStr(role: Role): string {
	const end = role.end ? formatYM(role.end) : 'Present'
	return `${formatYM(role.start)} - ${end} · ${durationStr(role.start, role.end)}`
}

const experiences: Experience[] = [
	{
		company: 'Acko',
		employmentType: 'Full-time',
		location: 'Bengaluru, Karnataka, India · On-site',
		// Pantone Very Peri 17-3938
		logo: { bg: '#6667ab' },
		roles: [
			{
				title: 'SDE 2 - Data Platform',
				start: '2026-05',
				end: null,
				highlights: [
					{
						project: 'AgentX',
						desc: 'Building an org-wide AI agent on top of hermes-agent. It answers multi-modal questions wherever people already are (Slack, Google Chat, Jira, email) and picks up Jira tickets on its own. Still in progress.',
					},
				],
			},
			{
				title: 'SDE 1 - Data Platform',
				start: '2024-10',
				end: '2026-05',
				highlights: [
					{
						project: 'Reach.r',
						desc: 'Built the Discover page (attribute catalog) and Models page (data mart catalog with category filters) on our audience management platform, used by marketing and business teams.',
					},
					{
						project: 'Muxor',
						desc: 'Owned the audience segmentation engine that syncs Segment events with user profiles. Campaign targeting used to run on daily batches; now it happens in near real time.',
					},
					{
						project: 'QueryQ',
						desc: 'Worked on the self-service BigQuery query platform: scheduling, dependency orchestration, cost controls, and an AI assist that suggests data quality checks.',
					},
					{
						project: 'Catalogue',
						desc: 'Owned the catalogue service for metadata management and discovery. Built on OpenMetadata, with an MCP server so AI agents can query it.',
					},
					{
						project: 'Sentinel',
						desc: 'Owned the data quality service. It runs on Soda Core and covers row counts, null checks, uniqueness, freshness, and custom checks.',
					},
					{
						project: 'Projector',
						desc: 'Worked on the unified backend platform that hosts our data services and exposes an MCP server for AI agents.',
					},
					{
						project: 'Aether',
						desc: 'Owned the multi-agent orchestrator, built with Google ADK: Discovery, Modeling, Prediction, Activation, and Operations agents with dynamic MCP tool discovery.',
					},
				],
			},
		],
	},
	{
		company: 'Yahoo',
		employmentType: 'Full-time',
		location: 'Bengaluru, Karnataka, India · Hybrid',
		// Pantone Violet C
		logo: { bg: '#440099' },
		roles: [
			{
				title: 'Software Engineer',
				start: '2024-05',
				end: '2024-10',
				highlights: [
					{
						desc: 'Moved legacy ETL workflows off IBM DataStage onto Apache Airflow, which made the pipelines much easier to maintain and debug.',
					},
					{
						desc: 'Rebuilt a data API with async FastAPI behind multiple Gunicorn workers. Latency dropped from 72 seconds to 1.02 seconds.',
					},
				],
			},
		],
	},
]

const links = [
	{
		label: 'Resume',
		href: 'https://drive.google.com/file/d/1AdANGwhOY-DEKzm1W6f1er-CxKYwPF0G/view?usp=sharing',
		text: 'KM_resume.pdf',
		icon: 'description',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/kaustavmukhopadhyay/',
		text: '@kaustavmukhopadhyay',
		icon: 'work',
	},
	{
		label: 'GitHub',
		href: 'https://github.com/muKaustav',
		text: '@muKaustav',
		icon: 'code',
	},
	{
		label: 'Leetcode',
		href: 'https://leetcode.com/muKaustav/',
		text: '@muKaustav',
		icon: 'terminal',
	},
	{
		label: 'Email',
		href: 'mailto:mu.kaustav@gmail.com',
		text: 'mu.kaustav@gmail.com',
		icon: 'mail',
	},
]

export default function App() {
	const [isDark, setIsDark] = useState(() => {
		const saved = localStorage.getItem('theme')
		return saved ? saved === 'dark' : true
	})

	const colors = isDark ? m3Color.dark : m3Color.light

	useEffect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
		document.body.style.background = colors.surface
		document.body.style.transition = `background ${motion.duration.medium2} ${motion.easing.standard}`
		const root = document.documentElement
		root.style.setProperty('--bullet-color', colors.primary)
		root.style.setProperty('--selection-bg', colors.inversePrimary)
		root.style.setProperty('--selection-fg', colors.onPrimaryContainer)
	}, [isDark, colors])

	const sectionLabelStyle: React.CSSProperties = {
		...typescale.labelMedium,
		color: colors.onSurfaceVariant,
		textTransform: 'uppercase',
		display: 'block',
		marginBottom: 16,
	}

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
					colorLink: colors.primary,
					borderRadius: shape.medium,
					fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, sans-serif',
					motionEaseInOut: motion.easing.standard,
				},
				components: {
					Timeline: {
						dotBg: colors.surfaceContainer,
					},
					Tag: {
						borderRadiusSM: shape.full,
					},
					Switch: {
						colorPrimary: colors.primary,
						colorPrimaryHover: colors.primary,
					},
				},
			}}>
			<main
				style={{
					maxWidth: 900,
					margin: '0 auto',
					padding: 'clamp(16px, 5vw, 24px)',
					minHeight: '100vh',
				}}>
				{/* Header */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingBottom: 16,
						marginBottom: 24,
						borderBottom: `1px solid ${colors.outlineVariant}`,
					}}>
					<Title
						level={3}
						style={{
							...typescale.headlineSmall,
							fontWeight: 500,
							margin: 0,
							color: colors.onSurface,
						}}>
						Kaustav Mukhopadhyay
					</Title>
					<Switch
						checked={isDark}
						onChange={setIsDark}
						checkedChildren={<MSymbol name="dark_mode" size={12} />}
						unCheckedChildren={<MSymbol name="light_mode" size={12} />}
					/>
				</div>

				{/* About */}
				<section style={{ marginBottom: 32 }}>
					{/* Headline statement */}
					<Title
						level={2}
						style={{
							fontSize: 'clamp(26px, 5vw, 32px)',
							lineHeight: 1.25,
							fontWeight: 600,
							color: colors.onSurface,
							margin: '0 0 8px',
						}}>
						I build{' '}
						<span style={{ color: colors.primary }}>data platforms</span> and{' '}
						<span style={{ color: colors.primary }}>AI agents</span>.
					</Title>

					<Paragraph
						style={{
							...typescale.bodyLarge,
							color: colors.onSurfaceVariant,
							marginBottom: 16,
						}}>
						I'm an SDE 2 doing platform engineering: internal data products that
						make a complex data warehouse usable for people who aren't data
						engineers.
					</Paragraph>

					{/* Focus chips */}
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: 8,
							marginBottom: 20,
						}}>
						{[
							'Self-service data platforms',
							'Real-time infrastructure',
							'AI tooling & agents',
						].map((chip) => (
							<span
								key={chip}
								style={{
									...typescale.labelLarge,
									color: colors.onSurfaceVariant,
									border: `1px solid ${colors.outlineVariant}`,
									borderRadius: shape.small,
									padding: '6px 12px',
									transition: `border-color ${motion.duration.short4} ${motion.easing.standard}`,
								}}>
								{chip}
							</span>
						))}
					</div>

					{/* Now card */}
					<div
						style={{
							background: colors.primaryContainer,
							borderRadius: shape.large,
							padding: '16px 20px',
							marginBottom: 20,
							transition: `background ${motion.duration.medium2} ${motion.easing.standard}`,
						}}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 8,
								marginBottom: 6,
							}}>
							<span
								style={{
									width: 8,
									height: 8,
									borderRadius: shape.full,
									background: colors.primary,
									animation: 'pulse 2s infinite',
								}}
							/>
							<Text
								style={{
									...typescale.labelMedium,
									color: colors.onPrimaryContainer,
									textTransform: 'uppercase',
								}}>
								Now
							</Text>
						</div>
						<Text
							style={{
								...typescale.bodyMedium,
								color: colors.onPrimaryContainer,
								display: 'block',
							}}>
							Building{' '}
							<strong style={{ fontWeight: 600 }}>AgentX</strong> at Acko's
							Central Data Team: an org-wide AI agent you can reach from Slack,
							Google Chat, Jira, or email. It answers multi-modal questions and
							handles Jira tickets on its own.
						</Text>
					</div>

					<Paragraph
						style={{
							...typescale.bodyLarge,
							color: colors.onSurfaceVariant,
							marginBottom: 12,
						}}>
						I also own{' '}
						<strong style={{ color: colors.onSurface, fontWeight: 500 }}>
							QueryQ
						</strong>{' '}
						(query scheduling and management),{' '}
						<strong style={{ color: colors.onSurface, fontWeight: 500 }}>
							Muxor
						</strong>{' '}
						(near real-time audience segmentation), and{' '}
						<strong style={{ color: colors.onSurface, fontWeight: 500 }}>
							Sentinel
						</strong>{' '}
						(data quality monitoring). Before this I was at Yahoo, where I moved
						legacy ETL to Airflow and cut one API's latency from{' '}
						<strong style={{ color: colors.onSurface, fontWeight: 500 }}>
							72 seconds to about 1 second
						</strong>
						.
					</Paragraph>
					<Paragraph
						style={{
							...typescale.bodyLarge,
							color: colors.onSurfaceVariant,
							marginBottom: 0,
						}}>
						Outside of work I play guitar, lose hours to Counter Strike and Call
						of Duty, and watch more films than I can keep track of. I read a
						lot too. Murakami has taken up most of my bookshelf at this point.
					</Paragraph>
				</section>

				{/* Experience (LinkedIn-style) */}
				<section
					style={{
						marginBottom: 32,
						background: colors.surfaceContainerLow,
						borderRadius: shape.large,
						padding: 'clamp(16px, 4vw, 24px)',
						transition: `background ${motion.duration.medium2} ${motion.easing.standard}`,
					}}>
					<Text
						style={{
							...typescale.titleLarge,
							color: colors.onSurface,
							display: 'block',
							marginBottom: 20,
						}}>
						Experience
					</Text>

					{experiences.map((exp, expIdx) => {
						const multi = exp.roles.length > 1
						const firstRole = exp.roles[0]
						const companyStart = exp.roles[exp.roles.length - 1].start
						const companyEnd = firstRole.end

						const bullets = (role: Role) => (
							<>
								<ul style={{ margin: 0, paddingLeft: 20 }}>
									{role.highlights.map((h, i) => (
										<li
											key={i}
											style={{
												...typescale.bodyMedium,
												marginBottom: 8,
												color: colors.onSurfaceVariant,
											}}>
											{h.project ? (
												<>
													<strong
														style={{
															color: colors.onSurface,
															fontWeight: 600,
														}}>
														{h.project}
													</strong>
													{': '}
													{h.desc}
												</>
											) : (
												h.desc
											)}
										</li>
									))}
								</ul>
								{role.skills && (
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: 8,
											marginTop: 4,
										}}>
										<MSymbol
											name="diamond"
											size={16}
											style={{ color: colors.onSurface }}
										/>
										<Text
											style={{
												...typescale.labelLarge,
												color: colors.onSurface,
											}}>
											{role.skills}
										</Text>
									</div>
								)}
							</>
						)

						return (
							<div key={`${exp.company}-${expIdx}`}>
								<div style={{ display: 'flex', gap: 12 }}>
									{/* Logo tile */}
									<LogoTile logo={exp.logo} />

									{/* Header text */}
									<div style={{ minWidth: 0 }}>
										<Text
											style={{
												...typescale.titleMedium,
												color: colors.onSurface,
												display: 'block',
											}}>
											{multi ? exp.company : firstRole.title}
										</Text>
										<div
											style={{
												...typescale.bodyMedium,
												color: colors.onSurface,
											}}>
											{multi
												? `${exp.employmentType} · ${durationStr(companyStart, companyEnd)}`
												: `${exp.company} · ${exp.employmentType}`}
										</div>
										{!multi && (
											<div
												style={{
													...typescale.labelMedium,
													color: colors.onSurfaceVariant,
												}}>
												{periodStr(firstRole)}
											</div>
										)}
										<div
											style={{
												...typescale.labelMedium,
												color: colors.onSurfaceVariant,
											}}>
											{exp.location}
										</div>
									</div>
								</div>

								{multi ? (
									/* Nested roles with dot-and-line rail */
									<div style={{ marginTop: 12 }}>
										{exp.roles.map((role, roleIdx) => {
											const isLast = roleIdx === exp.roles.length - 1
											return (
												<div key={roleIdx} style={{ display: 'flex', gap: 12 }}>
													<div
														style={{
															width: 48,
															flexShrink: 0,
															display: 'flex',
															flexDirection: 'column',
															alignItems: 'center',
														}}>
														<span
															style={{
																width: 8,
																height: 8,
																flexShrink: 0,
																borderRadius: shape.full,
																background: colors.outlineVariant,
																marginTop: 6,
															}}
														/>
														{!isLast && (
															<span
																style={{
																	width: 2,
																	flex: 1,
																	background: colors.outlineVariant,
																	marginTop: 4,
																	marginBottom: 4,
																}}
															/>
														)}
													</div>
													<div
														style={{
															flex: 1,
															minWidth: 0,
															paddingBottom: isLast ? 0 : 20,
														}}>
														<Text
															style={{
																...typescale.titleSmall,
																color: colors.onSurface,
																display: 'block',
															}}>
															{role.title}
														</Text>
														<div
															style={{
																...typescale.labelMedium,
																color: colors.onSurfaceVariant,
																marginBottom: 8,
															}}>
															{periodStr(role)}
														</div>
														{bullets(role)}
													</div>
												</div>
											)
										})}
									</div>
								) : (
									<div style={{ marginLeft: 60, marginTop: 8 }}>
										{bullets(firstRole)}
									</div>
								)}

								{expIdx < experiences.length - 1 && (
									<div
										style={{
											height: 1,
											background: colors.outlineVariant,
											margin: '20px 0',
										}}
									/>
								)}
							</div>
						)
					})}
				</section>

				{/* Links */}
				<section style={{ marginBottom: 32 }}>
					<Text style={sectionLabelStyle}>Links</Text>

					<ul style={{ margin: 0, paddingLeft: 20 }}>
						{links.map((link) => (
							<li
								key={link.label}
								style={{ ...typescale.bodyMedium, marginBottom: 8 }}>
								<span
									style={{
										color: colors.onSurface,
										fontWeight: 500,
									}}>
									{link.label}:
								</span>{' '}
								<Link
									href={link.href}
									target="_blank"
									style={{
										color: colors.primary,
										fontWeight: 400,
										transition: `color ${motion.duration.short4} ${motion.easing.standard}`,
									}}>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* Spotify */}
				<SpotifyNowPlaying colors={colors} />

				{/* Footer */}
				<footer
					style={{
						paddingTop: 16,
						marginTop: 32,
						borderTop: `1px solid ${colors.outlineVariant}`,
					}}>
					<Text style={{ ...typescale.bodySmall, color: colors.onSurfaceVariant }}>
						© 2026 Kaustav Mukhopadhyay
					</Text>
				</footer>
			</main>
		</ConfigProvider>
	)
}
