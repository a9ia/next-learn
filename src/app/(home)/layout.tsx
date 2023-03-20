import './globals.css'
import Nav from './(components)/Navigator'

export const metadata = {
  title: 'Chain Scan',
  description: 'Trace chain change',
  // icons: {
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
