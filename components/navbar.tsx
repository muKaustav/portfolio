'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu } from 'lucide-react'
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
				'sticky top-0 z-50 w-full transition-all duration-200 border-b',
				isScrolled
					? 'bg-background/80 backdrop-blur-md border-border'
					: 'bg-background border-border'
			)}>
			<div className="container flex h-16 items-center">
				{/* Desktop Navigation */}
				<div className="mr-4 hidden md:flex">
					<nav className="flex items-center space-x-8 text-sm font-medium">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'px-3 py-2 rounded-md transition-colors duration-200',
									pathname === item.href
										? 'text-primary bg-secondary'
										: 'text-muted-foreground hover:text-foreground hover:bg-accent'
								)}>
								{item.name}
							</Link>
						))}
					</nav>
				</div>

				{/* Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon" className="mr-2">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="bg-background">
						<div className="mb-8">
							<span className="font-bold text-foreground text-lg">
								Kaustav Mukhopadhyay
							</span>
						</div>

						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'px-4 py-3 rounded-lg transition-colors duration-200',
										pathname === item.href
											? 'bg-secondary text-foreground'
											: 'text-muted-foreground hover:bg-accent hover:text-foreground'
									)}>
									{item.name}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>

				{/* Right side */}
				<div className="flex flex-1 items-center justify-end space-x-2">
					<div className="hidden md:block">
						<div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-xs font-medium text-green-700 dark:text-green-300">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<span>Available for work</span>
						</div>
					</div>
					<ModeToggle />
				</div>
			</div>
		</header>
	)
}
