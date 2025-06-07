import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/kaustavmukhopadhyay',
		icon: Linkedin,
		color: 'hover:text-blue-600 dark:hover:text-blue-400',
		bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
	},
	{
		name: 'GitHub',
		href: 'https://github.com/muKaustav',
		icon: Github,
		color: 'hover:text-gray-800 dark:hover:text-gray-200',
		bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-800/20',
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/kaussycs',
		icon: Twitter,
		color: 'hover:text-sky-500 dark:hover:text-sky-400',
		bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-900/20',
	},
	{
		name: 'Email',
		href: 'mailto:mu.kaustav@gmail.com',
		icon: Mail,
		color: 'hover:text-red-500 dark:hover:text-red-400',
		bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20',
	},
]

export default function SocialLinks() {
	return (
		<div className="flex gap-2">
			{socialLinks.map((social, index) => (
				<Button
					key={social.name}
					variant="ghost"
					size="icon"
					asChild
					className={`hover-focus magnetic transition-all duration-300 ${social.color} ${social.bgColor} relative overflow-hidden group`}
					style={{ animationDelay: `${index * 0.1}s` }}>
					<Link
						href={social.href}
						target="_blank"
						aria-label={social.name}
						className="relative z-10">
						<social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-md"></div>
					</Link>
				</Button>
			))}
		</div>
	)
}
