import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Clock, Calendar, Tag, Share, BookOpen } from 'lucide-react'
import Link from 'next/link'

// This would typically come from a CMS or API
const blogPosts = {
	'getting-started-with-system-design': {
		title: 'Getting Started with System Design',
		date: '2023-12-15',
		tags: ['System Design', 'Backend', 'Architecture'],
		readTime: '8 min read',
		excerpt:
			'System design is a critical skill for software engineers, especially those working on large-scale applications.',
		content: `
      # Getting Started with System Design

      System design is a critical skill for software engineers, especially those working on large-scale applications. This post will introduce you to the fundamental concepts and approaches to system design.

      ## What is System Design?

      System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It's about making decisions that balance various constraints like scalability, reliability, and performance.

      ## Key Principles

      1. **Scalability**: Design systems that can handle growth in users, data, and traffic.
      2. **Reliability**: Ensure the system continues to work correctly even when facing hardware or software failures.
      3. **Availability**: Make sure the system remains operational for a high percentage of time.
      4. **Efficiency**: Optimize for performance and resource utilization.
      5. **Maintainability**: Create systems that are easy to operate, modify, and extend.

      ## Common Components in System Design

      - **Load Balancers**: Distribute incoming network traffic across multiple servers.
      - **Caching**: Store frequently accessed data in memory for faster retrieval.
      - **Database Sharding**: Partition data across multiple databases to handle large datasets.
      - **Microservices**: Break down applications into smaller, independent services.
      - **Message Queues**: Enable asynchronous communication between services.

      ## Getting Started

      If you're new to system design, start by understanding the requirements and constraints of the system you're building. Then, sketch a high-level design and gradually refine it by addressing potential bottlenecks and failure points.

      Remember, there's rarely a one-size-fits-all solution in system design. The best approach depends on your specific requirements, constraints, and trade-offs.
    `,
	},
	'building-scalable-backends': {
		title: 'Building Scalable Backend Systems',
		date: '2024-02-20',
		tags: ['Backend', 'Scalability', 'Performance'],
		readTime: '12 min read',
		excerpt:
			'Creating backend systems that can scale to millions of users requires careful planning and architecture.',
		content: `
      # Building Scalable Backend Systems

      Creating backend systems that can scale to millions of users requires careful planning and architecture. This post explores key strategies for building highly scalable backends.

      ## Horizontal vs. Vertical Scaling

      **Vertical scaling** involves adding more power (CPU, RAM) to your existing machines, while **horizontal scaling** means adding more machines to your pool of resources. Horizontal scaling is generally more effective for handling large-scale applications.

      ## Stateless Services

      Design your services to be stateless whenever possible. This allows you to scale by adding more instances without worrying about state synchronization.

      ## Database Considerations

      - **Connection Pooling**: Efficiently manage database connections to prevent overloading.
      - **Read Replicas**: Distribute read operations across multiple database instances.
      - **Sharding**: Partition your data across multiple databases based on a shard key.
      - **NoSQL Options**: Consider NoSQL databases for specific use cases that require high scalability.

      ## Caching Strategies

      Implement caching at various levels:
      - **Application Cache**: In-memory caches like Redis or Memcached.
      - **Database Cache**: Query caches to avoid repeated expensive queries.
      - **CDN**: For static assets and API responses that don't change frequently.

      ## Asynchronous Processing

      Use message queues (like RabbitMQ, Kafka, or SQS) to handle tasks asynchronously, which helps manage traffic spikes and ensures system resilience.

      ## Monitoring and Auto-scaling

      Implement comprehensive monitoring to detect bottlenecks and automatically scale resources based on demand.

      Building truly scalable backends is an iterative process. Start with a solid foundation, measure performance, identify bottlenecks, and continuously refine your architecture.
    `,
	},
	'murakami-literary-analysis': {
		title: "A Deep Dive into Murakami's Literary World",
		date: '2024-04-10',
		tags: ['Books', 'Murakami', 'Literature'],
		readTime: '6 min read',
		excerpt:
			"Haruki Murakami's novels create unique worlds that blend the mundane with the surreal.",
		content: `
      # A Deep Dive into Murakami's Literary World

      Haruki Murakami's novels create unique worlds that blend the mundane with the surreal. This post explores the recurring themes and stylistic elements that define his literary universe.

      ## Parallel Realities

      One of Murakami's signature elements is the creation of parallel worlds that exist alongside our own. From the "other world" in "Hard-Boiled Wonderland and the End of the World" to the alternate reality in "1Q84," these parallel dimensions often serve as metaphors for the characters' psychological states.

      ## Loneliness and Alienation

      Murakami's protagonists are typically isolated individuals who struggle to connect with others. This sense of alienation reflects the modern condition in increasingly urbanized societies.

      ## Western Influences

      Unlike many Japanese authors, Murakami's work is heavily influenced by Western culture, from jazz music to American literature. This cultural fusion creates a unique literary style that transcends traditional boundaries.

      ## Magical Realism

      Murakami seamlessly blends realistic settings with surreal elements. Talking cats, raining fish, and mysterious disappearances are presented matter-of-factly, challenging readers to reconsider their perception of reality.

      ## Notable Works

      - **Norwegian Wood**: A more realistic novel that catapulted Murakami to fame in Japan.
      - **The Wind-Up Bird Chronicle**: A complex narrative exploring Japan's historical consciousness.
      - **Kafka on the Shore**: A magical realist tale featuring parallel narratives.
      - **1Q84**: An ambitious three-volume novel exploring alternate realities.

      Murakami's work continues to captivate readers worldwide with its unique blend of the familiar and the strange, the mundane and the magical. His novels invite us to look beyond the surface of everyday life and discover the mysteries that lie beneath.
    `,
	},
}

export default function BlogPost({ params }: { params: { slug: string } }) {
	const post = blogPosts[params.slug as keyof typeof blogPosts]

	if (!post) {
		return (
			<div className="relative min-h-screen">
				<div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950" />
				<div className="container max-w-3xl py-10 md:py-20">
					<div className="text-center space-y-6 animate-fade-in-up">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white">
							Post not found
						</h1>
						<p className="text-muted-foreground">
							The article you're looking for doesn't exist.
						</p>
						<Link
							href="/blog"
							className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300 group">
							<ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
							Back to blog
						</Link>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="relative min-h-screen">
			{/* Animated background */}
			<div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950" />

			{/* Floating elements */}
			<div className="fixed inset-0 -z-10 overflow-hidden">
				<div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
				<div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000" />
			</div>

			<div className="container max-w-4xl py-10 md:py-20">
				{/* Back Button */}
				<div className="animate-fade-in-up">
					<Link
						href="/blog"
						className="group inline-flex items-center text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 mb-8">
						<ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
						<span>Back to blog</span>
					</Link>
				</div>

				<article className="space-y-8">
					{/* Article Header */}
					<header className="space-y-6 text-center animate-fade-in-up animation-delay-200">
						<div className="space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent">
								{post.title}
							</h1>

							<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
								{post.excerpt}
							</p>
						</div>

						{/* Article Meta */}
						<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
							<div className="flex items-center space-x-2 group">
								<Calendar className="h-4 w-4 group-hover:text-purple-600 transition-colors duration-300" />
								<time dateTime={post.date}>{formatDate(post.date)}</time>
							</div>

							<div className="flex items-center space-x-2 group">
								<Clock className="h-4 w-4 group-hover:text-purple-600 transition-colors duration-300" />
								<span>{post.readTime}</span>
							</div>

							<div className="flex items-center space-x-2 group">
								<BookOpen className="h-4 w-4 group-hover:text-purple-600 transition-colors duration-300" />
								<span>{post.content.split(' ').length} words</span>
							</div>
						</div>

						{/* Tags */}
						<div className="flex flex-wrap justify-center gap-2 animate-fade-in-up animation-delay-400">
							{post.tags.map((tag, index) => (
								<Badge
									key={tag}
									variant="secondary"
									className="hover:scale-105 transition-all duration-300 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-800/50 text-purple-800 dark:text-purple-200"
									style={{ animationDelay: `${600 + index * 100}ms` }}>
									<Tag className="h-3 w-3 mr-1" />
									{tag}
								</Badge>
							))}
						</div>

						{/* Share Button */}
						<div className="animate-fade-in-up animation-delay-600">
							<button className="group inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 text-purple-700 dark:text-purple-300 transition-all duration-300 hover:scale-105">
								<Share className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
								<span>Share article</span>
							</button>
						</div>
					</header>

					{/* Article Content */}
					<div className="relative animate-fade-in-up animation-delay-800">
						<div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-50" />
						<div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
							<div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
								{post.content.split('\n').map((line, i) => {
									if (line.startsWith('# ')) {
										return (
											<h1
												key={i}
												className="text-3xl font-bold mt-12 mb-6 first:mt-0 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
												{line.substring(2)}
											</h1>
										)
									} else if (line.startsWith('## ')) {
										return (
											<h2
												key={i}
												className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-purple-500 pl-4">
												{line.substring(3)}
											</h2>
										)
									} else if (line.startsWith('- **')) {
										const content = line
											.substring(3)
											.replace('**', '')
											.split(':')
										return (
											<div
												key={i}
												className="ml-6 my-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border-l-3 border-purple-400">
												<strong className="text-purple-700 dark:text-purple-300">
													{content[0]}
												</strong>
												<span className="text-gray-700 dark:text-gray-300">
													: {content[1]}
												</span>
											</div>
										)
									} else if (line.startsWith('- ')) {
										return (
											<div
												key={i}
												className="flex items-start space-x-3 ml-6 my-2">
												<div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0" />
												<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
													{line.substring(2)}
												</p>
											</div>
										)
									} else if (line.trim() !== '') {
										return (
											<p
												key={i}
												className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
												{line}
											</p>
										)
									}
									return null
								})}
							</div>
						</div>
					</div>

					{/* Article Footer */}
					<footer className="mt-16 space-y-8 animate-fade-in-up animation-delay-1000">
						{/* Author Card */}
						<div className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
							<div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
								<div className="flex items-start space-x-4">
									<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
										KM
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
											Kaustav Mukhopadhyay
										</h3>
										<p className="text-muted-foreground mb-4">
											Backend developer passionate about system design and
											scalable architectures. Currently building the Customer
											Data Platform at Acko.
										</p>
										<div className="flex items-center space-x-4 text-sm">
											<Link
												href="/"
												className="text-purple-600 hover:text-purple-700 transition-colors duration-300">
												View Profile
											</Link>
											<Link
												href="/blog"
												className="text-purple-600 hover:text-purple-700 transition-colors duration-300">
												More Articles
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Navigation */}
						<div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
							<Link
								href="/blog"
								className="group inline-flex items-center text-purple-600 hover:text-purple-700 transition-all duration-300">
								<ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
								<span>Back to all articles</span>
							</Link>

							<button className="group inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
								<Share className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
								<span>Share</span>
							</button>
						</div>
					</footer>
				</article>
			</div>
		</div>
	)
}
