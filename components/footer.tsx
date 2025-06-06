import SocialLinks from './social-links'

export default function Footer() {
	return (
		<footer className="border-t py-6 md:py-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
				<p className="text-sm text-muted-foreground">
					© {new Date().getFullYear()} Kaustav Mukhopadhyay. All rights
					reserved.
				</p>
				<SocialLinks />
			</div>
		</footer>
	)
}
