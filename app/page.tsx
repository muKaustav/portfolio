import { Button } from '@/components/ui/button'
import {
	FileText,
	Code,
	Database,
	Globe,
	Zap,
	BookOpen,
	ExternalLink,
} from 'lucide-react'
import Link from 'next/link'
import SocialLinks from '@/components/social-links'

export default function Home() {
	return (
		<div className="min-h-screen page-transition">
			<div className="container max-w-4xl py-16 md:py-24">
				{/* Hero Section */}
				<section className="space-y-8 relative">
					{/* Floating particles effect */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
						<div
							className="absolute top-32 right-20 w-1 h-1 bg-primary/30 rounded-full animate-ping"
							style={{ animationDelay: '1s' }}></div>
						<div
							className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse"
							style={{ animationDelay: '2s' }}></div>
						<div
							className="absolute top-1/2 right-10 w-1 h-1 bg-primary/20 rounded-full animate-ping"
							style={{ animationDelay: '0.5s' }}></div>
					</div>

					<div className="space-y-6 relative z-10">
						<div className="space-y-4">
							<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-foreground">
								<span className="gradient-text">Kaustav</span>
								<br />
								<span className="">Mukhopadhyay</span>
							</h1>
						</div>

						<div className="flex items-center space-x-3 group">
							<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors duration-500">
								<Code className="h-5 w-5 text-primary" />
							</div>
							<p className="text-xl text-gray-600 dark:text-muted-foreground">
								Backend Developer & System Design Enthusiast
							</p>
						</div>
					</div>

					{/* Enhanced CTA buttons */}
					<div className="flex flex-wrap gap-4 relative z-10">
						<Button
							asChild
							className="bg-primary hover:bg-primary/90 text-primary-foreground btn-enhanced shadow-lg hover:shadow-xl rounded-lg">
							<Link href="/KM_resume.pdf" target="_blank">
								<FileText className="mr-2 h-4 w-4" />
								Resume
							</Link>
						</Button>
						<div className="hover-focus rounded-lg">
							<SocialLinks />
						</div>
					</div>

					{/* Enhanced Skills showcase */}
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 relative z-10">
						{[
							{
								icon: Database,
								label: 'Backend',
								color: 'text-primary',
								delay: '0s',
							},
							{
								icon: Globe,
								label: 'System Design',
								color: 'text-primary',
								delay: '0.2s',
							},
							{
								icon: Zap,
								label: 'DevOps',
								color: 'text-primary',
								delay: '0.4s',
							},
							{
								icon: Code,
								label: 'Cloud',
								color: 'text-primary',
								delay: '0.6s',
							},
							{
								icon: BookOpen,
								label: 'Literature',
								color: 'text-primary',
								delay: '0.8s',
							},
						].map((skill, index) => (
							<div
								key={skill.label}
								className="p-6 rounded-xl glass-card hover:bg-primary/5 cursor-pointer float-animation transition-all duration-500"
								style={{ animationDelay: skill.delay }}>
								<skill.icon
									className={`h-8 w-8 ${skill.color} mb-3 transition-transform duration-500`}
								/>
								<p className="text-sm font-medium text-card-foreground">
									{skill.label}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Enhanced About Section */}
				<section className="mt-24 space-y-8 relative">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-foreground ">
						About Me
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group transition-all duration-500">
								<div className="flex items-start space-x-4">
									<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-all duration-500">
										<Code className="h-5 w-5 text-primary group-hover:rotate-6 transition-transform duration-500" />
									</div>
									<div>
										<h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-500">
											Backend Developer
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Specializing in scalable, resilient systems that handle
											millions of users with clean architecture.
										</p>
									</div>
								</div>
							</div>

							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group transition-all duration-500">
								<div className="flex items-start space-x-4">
									<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-all duration-500">
										<BookOpen className="h-5 w-5 text-primary group-hover:rotate-6 transition-transform duration-500" />
									</div>
									<div>
										<h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-500">
											Literature Enthusiast
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Passionate about books and cinema, with a particular
											interest in Murakami&apos;s literary works.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="p-8 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden transition-all duration-500">
								<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
								<div className="space-y-4 relative z-10">
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-500 rounded-full pulse-glow"></div>
										<span className="text-sm font-medium text-muted-foreground">
											Currently at Acko (July 2024 - Present)
										</span>
									</div>
									<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
										SDE 1
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Building the Customer Data Platform (CDP) to aggregate and
										unify customer data from diverse sources, enabling
										data-driven marketing strategies.
									</p>
									<div className="flex flex-wrap gap-2 pt-4">
										{[
											'Customer Data Platform',
											'Data Engineering',
											'System Design',
										].map((tag, index) => (
											<span
												key={tag}
												className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer"
												style={{ animationDelay: `${index * 0.1}s` }}>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Enhanced Experience */}
				<section className="mt-24 space-y-8 relative">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-foreground">
						Experience
					</h2>

					<div className="relative pl-8 space-y-8">
						{/* Current Position - Acko */}
						<div className="relative">
							<div className="absolute -left-8 top-0 w-4 h-4 bg-green-500 rounded-full pulse-glow z-20"></div>
							<div className="absolute -left-6 top-4 w-0.5 h-full bg-gradient-to-b from-green-500 to-purple-500 opacity-50 z-10"></div>

							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden ml-4 transition-all duration-500">
								<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-3">
										<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
											SDE 1 @ Acko
										</h3>
										<span className="px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
											Current
										</span>
									</div>
									<p className="text-sm text-muted-foreground mb-2">
										July 2024 - Present
									</p>
									<p className="text-muted-foreground mb-4">
										Building the Customer Data Platform (CDP) to aggregate and
										unify customer data from diverse sources for data-driven
										marketing strategies.
									</p>
								</div>
							</div>
						</div>

						{/* Yahoo Full-time Experience */}
						<div className="relative">
							<div className="absolute -left-8 top-0 w-4 h-4 bg-purple-500 rounded-full z-20"></div>
							<div className="absolute -left-6 top-4 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 opacity-50 z-10"></div>

							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden ml-4 transition-all duration-500">
								<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-3">
										<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
											Associate Software Apps Engineer @ Yahoo!
										</h3>
									</div>
									<p className="text-sm text-muted-foreground mb-2">May 2024</p>
									<ul className="text-muted-foreground mb-4 space-y-2 text-sm">
										<li>
											• Implemented GraphQL routes and FastAPI worker threads,
											reducing latency from 72s to 1.02s
										</li>
										<li>
											• Contributed to migration from IBM DataStage to Apache
											Airflow with optimized Dockerfiles
										</li>
										<li>
											• Developed ReactJS dashboards, optimizing invoice
											tool&apos;s search from 50% to single line
										</li>
									</ul>
									<div className="flex flex-wrap gap-2">
										{[
											'Apache Airflow',
											'ReactJS',
											'FastAPI',
											'GraphQL',
											'Docker',
										].map((tech, index) => (
											<span
												key={tech}
												className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Yahoo Intern Experience */}
						<div className="relative">
							<div className="absolute -left-8 top-0 w-4 h-4 bg-blue-500 rounded-full z-20"></div>
							<div className="absolute -left-6 top-4 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-500 opacity-50 z-10"></div>

							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden ml-4 transition-all duration-500">
								<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-3">
										<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
											DevOps Engineering Intern @ Yahoo!
										</h3>
									</div>
									<p className="text-sm text-muted-foreground mb-2">May 2023</p>
									<ul className="text-muted-foreground mb-4 space-y-2 text-sm">
										<li>
											• Migrated internal monitoring tool to cloud-based
											architecture within Yahoo! DSP (Ads) team
										</li>
										<li>
											• Enhanced Oozie workflows metrics visualization,
											empowering stakeholders with actionable insights
										</li>
										<li>
											• Wrote utility scripts & APIs to process & serve data for
											business critical metrics
										</li>
									</ul>
									<div className="flex flex-wrap gap-2">
										{['FastAPI', 'Python', 'Docker', 'Kubernetes'].map(
											(tech, index) => (
												<span
													key={tech}
													className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
													{tech}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</div>

						{/* Turnkey Tech Solutions */}
						<div className="relative">
							<div className="absolute -left-8 top-0 w-4 h-4 bg-indigo-500 rounded-full z-20"></div>

							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden ml-4 transition-all duration-500 ">
								<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-3">
										<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
											Associate SDE @ Turnkey Tech Solutions
										</h3>
									</div>
									<p className="text-sm text-muted-foreground mb-2">
										September 2022
									</p>
									<ul className="text-muted-foreground mb-4 space-y-2 text-sm">
										<li>
											• Developed MVPs for diverse startups with robust backend
											systems using AWS Suite
										</li>
										<li>
											• Optimized backend functions, enhancing space and time
											complexities
										</li>
										<li>
											• Collaborated with clients to strategically reduce AWS
											costs
										</li>
									</ul>
									<div className="flex flex-wrap gap-2">
										{['NodeJS', 'Django REST', 'AWS', 'Lambda'].map(
											(tech, index) => (
												<span
													key={tech}
													className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full">
													{tech}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section className="mt-24 space-y-8 relative">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-foreground ">
						Featured Projects
					</h2>

					<div className="grid md:grid-cols-2 gap-6">
						{/* ETL Pipeline */}
						<a
							href="https://github.com/muKaustav/etl-hltv-news"
							target="_blank"
							rel="noopener noreferrer"
							className="block h-full">
							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden transition-all duration-500 cursor-pointer h-full flex flex-col">
								<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
								<div className="relative z-10 flex flex-col h-full">
									<div className="flex items-start justify-between mb-2">
										<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
											ETL with HLTV News
										</h3>
										<ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-500 flex-shrink-0 ml-2" />
									</div>
									<p className="text-sm text-muted-foreground mb-3">
										November 2023
									</p>
									<p className="text-muted-foreground mb-4 flex-1">
										Built ETL pipeline with Apache Airflow and Spark for
										automated HLTV news data processing, with daily scheduled
										extraction, transformation, and storage in AWS S3.
									</p>
									<div className="flex flex-wrap gap-2 mt-auto">
										{['Apache Airflow', 'Apache Spark', 'AWS S3', 'Python'].map(
											(tech) => (
												<span
													key={tech}
													className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full">
													{tech}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</a>

						{/* Hostel Bazaar */}
						<a
							href="https://github.com/muKaustav/hostel-bazaar"
							target="_blank"
							rel="noopener noreferrer"
							className="block h-full">
							<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden transition-all duration-500 cursor-pointer h-full flex flex-col">
								<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
								<div className="relative z-10 flex flex-col h-full">
									<div className="flex items-start justify-between mb-2">
										<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
											Hostel Bazaar
										</h3>
										<ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-500 flex-shrink-0 ml-2" />
									</div>
									<p className="text-sm text-muted-foreground mb-3">
										January 2023
									</p>
									<p className="text-muted-foreground mb-4 flex-1">
										E-commerce application with microservices architecture. Used
										Redis for caching (70% faster queries) and RabbitMQ for
										asynchronous communication between services.
									</p>
									<div className="flex flex-wrap gap-2 mt-auto">
										{['Express', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker'].map(
											(tech) => (
												<span
													key={tech}
													className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full">
													{tech}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</a>

						{/* ShortURL */}
						<div className="md:col-span-2">
							<a
								href="https://github.com/muKaustav/shorturl"
								target="_blank"
								rel="noopener noreferrer"
								className="block h-full">
								<div className="p-6 rounded-xl glass-card hover:bg-primary/5 group relative overflow-hidden transition-all duration-500  cursor-pointer">
									<div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>
									<div className="relative z-10">
										<div className="flex items-start justify-between mb-2">
											<h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-500">
												ShortURL - Distributed URL Shortener
											</h3>
											<ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-500 flex-shrink-0 ml-2" />
										</div>
										<p className="text-sm text-muted-foreground mb-3">
											February 2022
										</p>
										<p className="text-muted-foreground mb-4">
											Highly available distributed URL shortener with Redis
											caching (80% performance improvement), Bloom Filter
											security checks, and Apache Zookeeper for distributed
											counting.
										</p>
										<div className="flex flex-wrap gap-2">
											{[
												'MERN Stack',
												'Redis',
												'Apache Zookeeper',
												'Docker',
												'Kubernetes',
												'Bloom Filter',
											].map((tech) => (
												<span
													key={tech}
													className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</section>

				{/* Technical Skills */}
				<section className="mt-24 space-y-8 relative">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-foreground ">
						Technical Skills
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								title: 'Languages',
								skills: [
									'Java',
									'Python',
									'Golang',
									'C++',
									'JavaScript',
									'SQL',
								],
								color:
									'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
							},
							{
								title: 'Frameworks',
								skills: [
									'Spring Boot',
									'FastAPI',
									'Gin',
									'ExpressJS',
									'ReactJS',
									'GraphQL',
								],
								color:
									'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
							},
							{
								title: 'Databases',
								skills: [
									'ClickHouse',
									'Google BigQuery',
									'ScyllaDB',
									'Google Bigtable',
									'PostgreSQL',
									'MongoDB',
									'Redis',
									'S3',
									'DynamoDB',
								],
								color:
									'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
							},
							{
								title: 'Cloud & DevOps',
								skills: [
									'Apache Kafka',
									'Apache Spark',
									'Apache Airflow',
									'Apache Beam',
									'GCP',
									'AWS',
									'Kubernetes',
									'Docker',
								],
								color:
									'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
							},
						].map((category, index) => (
							<div
								key={category.title}
								className="p-6 rounded-xl glass-card hover:bg-primary/5 group transition-all duration-500"
								style={{ animationDelay: `${index * 0.1}s` }}>
								<h3 className="font-bold text-card-foreground mb-4 group-hover:gradient-text transition-all duration-500">
									{category.title}
								</h3>
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill) => (
										<span
											key={skill}
											className={`px-2 py-1 text-xs rounded-full ${category.color} transition-all duration-500`}>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}
