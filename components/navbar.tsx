'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, Sparkles, Code2, Zap } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState, useEffect } from 'react'

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'Blog', href: '/blog' },
]

export default function Navbar() {
	const pathname = usePathname()
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full transition-all duration-500 border-b',
				isScrolled
					? 'bg-background/80 backdrop-blur-xl border-border shadow-lg'
					: 'bg-background border-border'
			)}>
			{/* Animated gradient line at top */}
			<div
				className={cn(
					'h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-700',
					isScrolled ? 'opacity-100' : 'opacity-0'
				)}
			/>

			<div className="container flex h-16 items-center relative">
				{/* Enhanced Desktop Navigation */}
				<div className="mr-4 hidden md:flex">
					<nav className="flex items-center space-x-2 text-sm font-medium">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'px-4 py-2 rounded-lg transition-all duration-500 relative overflow-hidden group',
									pathname === item.href
										? 'text-primary bg-primary/10 shadow-md'
										: 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
								)}>
								<span className="relative z-10">{item.name}</span>
								{pathname !== item.href && (
									<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
								)}
							</Link>
						))}
					</nav>
				</div>

				{/* Enhanced Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							className="relative mr-2 rounded-xl transition-all duration-500 hover:bg-accent/20 hover:scale-110 group overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
							<Menu className="h-5 w-5 relative z-10 group-hover:rotate-90 transition-transform duration-500" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent
						side="left"
						className="w-80 bg-background/90 backdrop-blur-xl border-r border-border/30">
						{/* Background animations */}
						<div className="absolute inset-0 overflow-hidden pointer-events-none">
							{/* Pulsating gradient orbs with movement */}
							<div
								className="absolute top-16 -left-8 w-32 h-32 bg-gradient-to-br from-primary/25 to-accent/20 rounded-full blur-2xl animate-pulse"
								style={{ animationDuration: '1.5s' }}></div>
							<div
								className="absolute bottom-20 -right-8 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/25 rounded-full blur-2xl animate-pulse"
								style={{
									animationDelay: '0.5s',
									animationDuration: '1.8s',
								}}></div>
							<div
								className="absolute top-1/2 -left-12 w-24 h-24 bg-gradient-to-br from-primary/15 to-accent/30 rounded-full blur-xl animate-pulse"
								style={{
									animationDelay: '1s',
									animationDuration: '1.3s',
								}}></div>
							<div
								className="absolute top-1/3 -right-6 w-28 h-28 bg-gradient-to-br from-accent/18 to-primary/22 rounded-full blur-xl animate-pulse"
								style={{
									animationDelay: '0.3s',
									animationDuration: '1.6s',
								}}></div>
							<div
								className="absolute bottom-1/3 left-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/15 rounded-full blur-xl animate-pulse"
								style={{
									animationDelay: '0.8s',
									animationDuration: '1.4s',
								}}></div>
							<div
								className="absolute top-2/3 right-2 w-36 h-36 bg-gradient-to-br from-accent/12 to-primary/18 rounded-full blur-3xl animate-pulse"
								style={{
									animationDelay: '1.2s',
									animationDuration: '2s',
								}}></div>
						</div>

						<div className="flex flex-col h-full relative z-10">
							{/* Header */}
							<div className="px-6 py-6 border-b border-border/10">
								<h2 className="text-lg font-semibold text-foreground">
									Portfolio
								</h2>
								<p className="text-sm text-muted-foreground mt-1">
									Backend Developer
								</p>
							</div>

							{/* Navigation */}
							<nav className="flex-1 px-6 py-6">
								<div className="space-y-2">
									{navItems.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={cn(
												'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:translate-x-1',
												pathname === item.href
													? 'bg-primary text-primary-foreground shadow-lg'
													: 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
											)}>
											{item.name}
										</Link>
									))}
								</div>
							</nav>

							{/* Footer */}
							<div className="px-6 py-4 border-t border-border/10">
								<div className="flex items-center space-x-2 text-xs text-muted-foreground">
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
									<span>Available for work</span>
								</div>
							</div>
						</div>
					</SheetContent>
				</Sheet>

				{/* Enhanced Right side */}
				<div className="flex flex-1 items-center justify-end space-x-3">
					<div className="hidden md:block">
						<div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-xs font-medium text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30">
							<div className="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
							<Sparkles className="h-3 w-3 group-hover:rotate-6 transition-transform duration-500" />
							<span className="group-hover:text-green-600 dark:group-hover:text-green-200 transition-colors duration-500">
								Available for work
							</span>
						</div>
					</div>
					<div className="rounded-lg transition-all duration-500">
						<ModeToggle />
					</div>
				</div>
			</div>

			{/* Bottom gradient line */}
			<div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
		</header>
	)
}
