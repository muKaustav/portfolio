import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function SocialLinks() {
	return (
		<div className="flex gap-2">
			<Button variant="ghost" size="icon" asChild className="hover-focus">
				<Link
					href="https://linkedin.com/in/kaustavmukhopadhyay"
					target="_blank"
					aria-label="LinkedIn">
					<Linkedin className="h-4 w-4" />
				</Link>
			</Button>
			<Button variant="ghost" size="icon" asChild className="hover-focus">
				<Link
					href="https://github.com/muKaustav"
					target="_blank"
					aria-label="GitHub">
					<Github className="h-4 w-4" />
				</Link>
			</Button>
			<Button variant="ghost" size="icon" asChild className="hover-focus">
				<Link
					href="https://twitter.com/kaussycs"
					target="_blank"
					aria-label="Twitter">
					<Twitter className="h-4 w-4" />
				</Link>
			</Button>
			<Button variant="ghost" size="icon" asChild className="hover-focus">
				<Link href="mailto:mu.kaustav@gmail.com" aria-label="Email">
					<Mail className="h-4 w-4" />
				</Link>
			</Button>
		</div>
	)
}
