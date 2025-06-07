import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const montserrat = Noto_Sans({
	subsets: ['latin'],
	variable: '--font-noto-sans',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Kaustav Mukhopadhyay - Backend Developer',
	description:
		'Personal portfolio of Kaustav Mukhopadhyay, Backend Developer specializing in system design and scalable architectures',
	keywords: [
		'Backend Developer',
		'System Design',
		'Software Engineer',
		'Kaustav Mukhopadhyay',
	],
	authors: [{ name: 'Kaustav Mukhopadhyay' }],
	openGraph: {
		title: 'Kaustav Mukhopadhyay - Backend Developer',
		description:
			'Backend Developer specializing in system design and scalable architectures',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={montserrat.variable}>
			<body
				className={`${montserrat.className} min-h-screen bg-background antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="relative flex min-h-screen flex-col">
						<div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(var(--primary)/0.1),transparent)]" />
						<Navbar />
						<main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
							<div className="page-transition">{children}</div>
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
