import './styles/globals.scss'

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
        suppressHydrationWarning={true}
      >{children}</body>
    </html>
  )
}
