import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const blogPosts = [
	{
		id: 'getting-started-with-system-design',
		title: 'Getting Started with System Design',
		description:
			"A beginner's guide to understanding system design principles and practices.",
		date: '2023-12-15',
		tags: ['System Design', 'Backend', 'Architecture'],
		readTime: '8 min read',
	},
	{
		id: 'building-scalable-backends',
		title: 'Building Scalable Backend Systems',
		description:
			'Learn how to design and implement backend systems that can scale to millions of users.',
		date: '2024-02-20',
		tags: ['Backend', 'Scalability', 'Performance'],
		readTime: '12 min read',
	},
	{
		id: 'murakami-literary-analysis',
		title: "A Deep Dive into Murakami's Literary World",
		description:
			"Exploring the themes and motifs in Haruki Murakami's most celebrated works.",
		date: '2024-04-10',
		tags: ['Books', 'Murakami', 'Literature'],
		readTime: '6 min read',
	},
]

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-background">
			<div className="container max-w-5xl py-16 md:py-24">
				{/* Header */}
				<section className="text-center mb-16 space-y-6">
					<div>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-foreground">
							Blog
						</h1>
						<div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto" />
					</div>

					<p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
						Thoughts on backend development, system design, and occasional
						musings on books and films.
					</p>

					{/* Stats */}
					<div className="flex justify-center space-x-8">
						<div className="text-center">
							<div className="text-2xl font-bold text-primary">
								{blogPosts.length}
							</div>
							<div className="text-sm text-muted-foreground">Articles</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-primary">
								{blogPosts.reduce(
									(acc, post) => acc + parseInt(post.readTime),
									0
								)}
							</div>
							<div className="text-sm text-muted-foreground">Min Read</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-primary">
								{
									Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
										.length
								}
							</div>
							<div className="text-sm text-muted-foreground">Topics</div>
						</div>
					</div>
				</section>

				{/* Blog Posts Grid */}
				<section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogPosts.map((post) => (
						<Card
							key={post.id}
							className="bg-card border border-border hover-blur-border group cursor-pointer">
							<CardHeader className="pb-3">
								<div className="flex items-start justify-between">
									<div className="flex-1">
										<CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-200">
											<Link href={`/blog/${post.id}`}>{post.title}</Link>
										</CardTitle>
										<div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
											<div className="flex items-center space-x-1">
												<Clock className="h-3 w-3" />
												<span>{formatDate(post.date)}</span>
											</div>
											<span>{post.readTime}</span>
										</div>
									</div>
									<ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
								</div>
							</CardHeader>

							<CardContent className="pb-4">
								<p className="text-muted-foreground leading-relaxed">
									{post.description}
								</p>
							</CardContent>

							<CardFooter className="pt-0">
								<div className="flex flex-wrap gap-2">
									{post.tags.map((tag) => (
										<Badge
											key={tag}
											variant="secondary"
											className="bg-secondary text-secondary-foreground">
											{tag}
										</Badge>
									))}
								</div>
							</CardFooter>
						</Card>
					))}
				</section>

				{/* Topics */}
				<section className="mt-16 text-center">
					<h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-foreground">
						Explore Topics
					</h2>
					<div className="flex flex-wrap justify-center gap-3">
						{Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map(
							(tag) => (
								<button
									key={tag}
									className="px-4 py-2 rounded-full bg-card border border-border text-card-foreground hover-blur-border transition-colors duration-200">
									#{tag.toLowerCase().replace(' ', '')}
								</button>
							)
						)}
					</div>
				</section>
			</div>
		</div>
	)
}
