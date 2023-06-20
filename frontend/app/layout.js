import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'Project to learn DevOps tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ inter.className }`}>{children}</body>
    </html>
  )
}
