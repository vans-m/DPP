import './styles/globals.scss'
import { Work_Sans } from 'next/font/google'

const sans = Work_Sans({ subsets: ['latin']  })

export const metadata = {
  title: 'DPP',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={sans.className}
        suppressHydrationWarning={true}
      >{children}</body>
    </html>
  )
}
