import { Button } from '@/components/ui/button'
import { FileText, Code, Database, Globe, Zap, BookOpen } from 'lucide-react'
import Link from 'next/link'
import SocialLinks from '@/components/social-links'

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-background">
			<div className="container max-w-4xl py-16 md:py-24">
				{/* Hero Section */}
				<section className="space-y-8">
					<div className="space-y-6">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-foreground">
							Kaustav Mukhopadhyay
						</h1>

						<div className="flex items-center space-x-3">
							<Code className="h-5 w-5 text-primary" />
							<p className="text-xl text-gray-600 dark:text-muted-foreground">
								Backend Developer & System Design Enthusiast
							</p>
						</div>
					</div>

					{/* CTA buttons */}
					<div className="flex flex-wrap gap-4">
						<Button
							asChild
							className="bg-primary hover:bg-primary/90 text-primary-foreground">
							<Link href="/KM_resume.pdf" target="_blank">
								<FileText className="mr-2 h-4 w-4" />
								Resume
							</Link>
						</Button>
						<SocialLinks />
					</div>

					{/* Skills showcase */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
						{[
							{
								icon: Database,
								label: 'Backend',
								color: 'text-primary',
							},
							{
								icon: Globe,
								label: 'System Design',
								color: 'text-primary',
							},
							{
								icon: Zap,
								label: 'Performance',
								color: 'text-primary',
							},
							{
								icon: BookOpen,
								label: 'Literature',
								color: 'text-primary',
							},
						].map((skill) => (
							<div
								key={skill.label}
								className="p-6 rounded-xl bg-card border border-border hover-blur-border cursor-pointer">
								<skill.icon className={`h-8 w-8 ${skill.color} mb-3`} />
								<p className="text-sm font-medium text-card-foreground">
									{skill.label}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* About Section */}
				<section className="mt-24 space-y-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-foreground">
						About Me
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<div className="p-6 rounded-xl bg-card border border-border hover-blur-border">
								<div className="flex items-start space-x-4">
									<div className="p-2 rounded-lg bg-primary/10">
										<Code className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold text-card-foreground mb-2">
											Backend Developer
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Specializing in scalable, resilient systems that handle
											millions of users with clean architecture.
										</p>
									</div>
								</div>
							</div>

							<div className="p-6 rounded-xl bg-card border border-border hover-blur-border">
								<div className="flex items-start space-x-4">
									<div className="p-2 rounded-lg bg-primary/10">
										<BookOpen className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold text-card-foreground mb-2">
											Literature Enthusiast
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Passionate about books and cinema, with a particular
											interest in Murakami's literary works.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="p-8 rounded-xl bg-card border border-border hover-blur-border">
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-500 rounded-full"></div>
										<span className="text-sm font-medium text-muted-foreground">
											Currently at Acko
										</span>
									</div>
									<h3 className="text-xl font-bold text-card-foreground">
										Customer Data Platform
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Building advanced data architecture to aggregate and unify
										customer data from diverse sources, enabling data-driven
										marketing strategies.
									</p>
									<div className="flex flex-wrap gap-2 pt-4">
										{['Data Engineering', 'System Design', 'Scalability'].map(
											(tag) => (
												<span
													key={tag}
													className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
													{tag}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Experience */}
				<section className="mt-24 space-y-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-foreground">
						Experience
					</h2>

					<div className="relative pl-8">
						<div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
						<div className="absolute left-2 top-4 w-0.5 h-full bg-border"></div>

						<div className="p-6 rounded-xl bg-card border border-border hover-blur-border">
							<div className="flex items-center justify-between mb-3">
								<h3 className="text-xl font-bold text-card-foreground">
									SDE 1 @ Acko
								</h3>
								<span className="px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
									Present
								</span>
							</div>
							<p className="text-muted-foreground mb-4">
								Building the Customer Data Platform (CDP) to aggregate and unify
								customer data from diverse sources.
							</p>
							<div className="space-y-2">
								<div className="flex items-center space-x-2 text-sm text-muted-foreground">
									<Zap className="h-4 w-4" />
									<span>High-performance data processing</span>
								</div>
								<div className="flex items-center space-x-2 text-sm text-muted-foreground">
									<Globe className="h-4 w-4" />
									<span>Scalable system architecture</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
