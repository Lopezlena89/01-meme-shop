


import { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
	title: 'La vida es un meme',
	description: 'La vida es un meme',
	
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" >
			<head >
        <link
          rel="icon"
          href="/logo_01.jpeg"
          type="image/jpeg"
          sizes='32x32'
          
        />
      </head>
			<body className="bg-background text-foreground dark:text-foreground dark:bg-background">
				<Providers >
							{children}					
				</Providers>
			</body>
		</html>
  )
}
