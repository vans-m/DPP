import Head from 'next/head'
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
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/tpv8aqd.css"></link>
      </Head>
      <body
        suppressHydrationWarning={true}
      >{children}</body>
    </html>
  )
}
