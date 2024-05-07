import './globals.css'

export const metadata = {
  title: 'JokeBox',
  description: 'You wanna get fun?',
}

export default function RootLayout({ children }) {

  return (
    
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
