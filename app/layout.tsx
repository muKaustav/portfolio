import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

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
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="flex min-h-screen flex-col">
						<Navbar />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
