'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, Sparkles } from 'lucide-react'
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
							className="mr-2 rounded-lg transition-all duration-500 hover:bg-accent/50">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="glass-card border-r-0">
						<div className="mb-8">
							<span className="font-bold text-foreground text-lg gradient-text">
								Kaustav Mukhopadhyay
							</span>
						</div>

						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'px-4 py-3 rounded-lg transition-all duration-500 group relative overflow-hidden',
										pathname === item.href
											? 'bg-primary/10 text-primary shadow-md'
											: 'text-muted-foreground hover:bg-accent hover:text-foreground'
									)}>
									<span className="relative z-10">{item.name}</span>
									{pathname !== item.href && (
										<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
									)}
								</Link>
							))}
						</nav>
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
		</header>
	)
}
