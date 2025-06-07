import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	Clock,
	ArrowRight,
	BookOpen,
	TrendingUp,
	Hash,
	ExternalLink,
	Globe,
} from 'lucide-react'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

const blogPosts = [
	{
		id: 'getting-started-with-system-design',
		title: 'Getting Started with System Design',
		description:
			"A beginner's guide to understanding system design principles and practices.",
		date: '2023-12-15',
		tags: ['System Design', 'Backend', 'Architecture'],
		readTime: '8 min read',
		featured: true,
		platform: 'Medium',
		url: 'https://medium.com/@kaustav/getting-started-with-system-design',
		platformLogo:
			'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/medium.svg',
	},
	{
		id: 'building-scalable-backends',
		title: 'Building Scalable Backend Systems',
		description:
			'Learn how to design and implement backend systems that can scale to millions of users.',
		date: '2024-02-20',
		tags: ['Backend', 'Scalability', 'Performance'],
		readTime: '12 min read',
		featured: false,
		platform: 'Dev.to',
		url: 'https://dev.to/kaustav/building-scalable-backends',
		platformLogo:
			'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/devdotto.svg',
	},
	{
		id: 'murakami-literary-analysis',
		title: "A Deep Dive into Murakami's Literary World",
		description:
			"Exploring the themes and motifs in Haruki Murakami's most celebrated works.",
		date: '2024-04-10',
		tags: ['Books', 'Murakami', 'Literature'],
		readTime: '6 min read',
		featured: false,
		platform: 'Hashnode',
		url: 'https://hashnode.com/@kaustav/murakami-literary-analysis',
		platformLogo:
			'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hashnode.svg',
	},
]

export default function BlogPage() {
	return (
		<div className="min-h-screen page-transition">
			<div className="container max-w-5xl py-16 md:py-24">
				{/* Enhanced Header */}
				<section className="text-center mb-16 space-y-6 relative">
					{/* Floating particles */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<div className="absolute top-10 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-ping"></div>
						<div
							className="absolute top-20 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-pulse"
							style={{ animationDelay: '1s' }}></div>
						<div
							className="absolute bottom-10 left-1/2 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse"
							style={{ animationDelay: '2s' }}></div>
					</div>

					<div className="relative z-10 float-animation">
						<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 backdrop-blur-sm mb-6">
							<BookOpen className="h-4 w-4 text-primary animate-pulse" />
							<span className="text-sm font-medium text-primary">
								Latest Thoughts
							</span>
						</div>

						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-foreground">
							<span className="gradient-text">Blog</span>
						</h1>
						<div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto"></div>
					</div>

					<p
						className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto relative z-10 float-animation"
						style={{ animationDelay: '0.2s' }}>
						Thoughts on backend development, system design, and occasional
						musings on books and films across various platforms.
					</p>

					{/* Enhanced Stats */}
					<div className="flex justify-center gap-8 md:gap-12 relative z-10">
						{[
							{
								value: blogPosts.length,
								label: 'Articles',
								icon: BookOpen,
								delay: '0s',
							},
							{
								value: blogPosts.reduce(
									(acc, post) => acc + parseInt(post.readTime),
									0
								),
								label: 'Min Read',
								icon: Clock,
								delay: '0.2s',
							},
							{
								value: Array.from(
									new Set(blogPosts.flatMap((post) => post.tags))
								).length,
								label: 'Topics',
								icon: Hash,
								delay: '0.4s',
							},
						].map((stat, index) => (
							<div
								key={stat.label}
								className="text-center group cursor-pointer float-animation"
								style={{ animationDelay: stat.delay }}>
								<div className="p-6 rounded-2xl glass-card transition-all duration-300 mb-3 min-w-[120px] relative overflow-hidden">
									<div className="shimmer absolute inset-0 opacity-0 transition-opacity duration-500"></div>
									<div className="relative z-10">
										<stat.icon className="h-6 w-6 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
										<div className="text-3xl font-bold text-primary group-hover:gradient-text transition-all duration-300 mb-1">
											{stat.value}
										</div>
										<div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
											{stat.label}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Enhanced Blog Posts Grid */}
				<section className="space-y-8">
					{/* Featured Post */}
					{blogPosts
						.filter((post) => post.featured)
						.map((post, index) => (
							<div key={post.id} className="block">
								<Card
									className="glass-card group relative overflow-hidden transition-all duration-500 float-animation"
									style={{ animationDelay: `${index * 0.1}s` }}>
									<div className="absolute top-4 right-4 z-10">
										<div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white text-xs font-medium shadow-lg">
											<TrendingUp className="h-3 w-3" />
											<span>Featured</span>
										</div>
									</div>

									<div className="shimmer absolute inset-0 opacity-0 transition-opacity duration-500"></div>

									<div className="p-6 space-y-6">
										<div className="flex items-center space-x-3 pt-6">
											<div className="w-8 h-8 p-1.5 rounded-lg bg-white dark:bg-gray-100 shadow-md flex items-center justify-center">
												<Image
													src={post.platformLogo}
													alt={`${post.platform} logo`}
													width={20}
													height={20}
													className="w-5 h-5 object-contain"
													style={{
														filter: 'brightness(0) saturate(100%)',
													}}
												/>
											</div>
											<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card">
												<Globe className="h-3 w-3 text-primary" />
												<span className="text-sm font-medium text-primary">
													{post.platform}
												</span>
											</div>
										</div>

										<div>
											<h2 className="text-3xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-300 mb-3">
												{post.title}
											</h2>
											<div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
												<div className="flex items-center space-x-1 group-hover:text-primary transition-colors duration-300">
													<Clock className="h-4 w-4" />
													<span>{formatDate(post.date)}</span>
												</div>
												<span className="group-hover:text-primary transition-colors duration-300">
													{post.readTime}
												</span>
											</div>
											<p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 mb-6">
												{post.description}
											</p>
										</div>

										<div className="flex flex-wrap gap-2 mb-6">
											{post.tags.map((tag, tagIndex) => (
												<Badge
													key={tag}
													variant="secondary"
													className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer magnetic"
													style={{
														animationDelay: `${tagIndex * 0.05}s`,
													}}>
													{tag}
												</Badge>
											))}
										</div>

										<a
											href={post.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full p-3 rounded-lg glass-card group/button cursor-pointer transition-all duration-300 relative overflow-hidden">
											<div className="shimmer absolute inset-0 opacity-0 transition-opacity duration-500"></div>
											<div className="relative z-10 flex items-center justify-center space-x-2">
												<ExternalLink className="h-4 w-4 text-primary transition-transform duration-300" />
												<span className="text-sm font-medium text-card-foreground transition-all duration-300">
													Read on {post.platform}
												</span>
											</div>
										</a>
									</div>
								</Card>
							</div>
						))}

					{/* Regular Posts Grid */}
					<div className="grid md:grid-cols-2 gap-6">
						{blogPosts
							.filter((post) => !post.featured)
							.map((post, index) => (
								<div key={post.id} className="block h-full">
									<Card
										className="glass-card group relative overflow-hidden transition-all duration-500 h-full float-animation"
										style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
										<div className="shimmer absolute inset-0 opacity-0 transition-opacity duration-500"></div>

										<CardHeader className="pb-3 relative z-10">
											<div className="flex items-center space-x-2 mb-3">
												<div className="w-6 h-6 p-1 rounded-md bg-white dark:bg-gray-100 shadow-sm flex items-center justify-center">
													<Image
														src={post.platformLogo}
														alt={`${post.platform} logo`}
														width={16}
														height={16}
														className="w-4 h-4 object-contain"
														style={{ filter: 'brightness(0) saturate(100%)' }}
													/>
												</div>
												<div className="inline-flex items-center space-x-1 px-2 py-1 rounded-full glass-card">
													<Globe className="h-3 w-3 text-primary" />
													<span className="text-xs font-medium text-primary">
														{post.platform}
													</span>
												</div>
											</div>
											<div className="flex items-start justify-between">
												<div className="flex-1">
													<CardTitle className="text-xl text-card-foreground group-hover:gradient-text transition-all duration-300 mb-2">
														{post.title}
													</CardTitle>
													<div className="flex items-center space-x-4 text-sm text-muted-foreground">
														<div className="flex items-center space-x-1 group-hover:text-primary transition-colors duration-300">
															<Clock className="h-3 w-3" />
															<span>{formatDate(post.date)}</span>
														</div>
														<span className="group-hover:text-primary transition-colors duration-300">
															{post.readTime}
														</span>
													</div>
												</div>
											</div>
										</CardHeader>

										<CardContent className="pb-4 relative z-10 flex-1">
											<p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 mb-4">
												{post.description}
											</p>
										</CardContent>

										<CardFooter className="pt-0 relative z-10 flex flex-col space-y-4">
											<div className="flex flex-wrap gap-2 w-full">
												{post.tags.map((tag, tagIndex) => (
													<Badge
														key={tag}
														variant="secondary"
														className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer magnetic"
														style={{ animationDelay: `${tagIndex * 0.05}s` }}>
														{tag}
													</Badge>
												))}
											</div>

											<a
												href={post.url}
												target="_blank"
												rel="noopener noreferrer"
												className="w-full p-3 rounded-lg glass-card group/button cursor-pointer transition-all duration-300 relative overflow-hidden">
												<div className="shimmer absolute inset-0 opacity-0 transition-opacity duration-500"></div>
												<div className="relative z-10 flex items-center justify-center space-x-2">
													<ExternalLink className="h-4 w-4 text-primary transition-transform duration-300" />
													<span className="text-sm font-medium text-card-foreground transition-all duration-300">
														Read on {post.platform}
													</span>
												</div>
											</a>
										</CardFooter>
									</Card>
								</div>
							))}
					</div>
				</section>
			</div>
		</div>
	)
}
