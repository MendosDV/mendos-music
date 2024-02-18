import './globals.scss'

export const metadata = {
  title: 'Just music 🎧',
  description: 'By Mickael for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-slate-800">
          <h1 className="font-bold text-white">Just music 🎧</h1>
        </header>
        {children}
        <footer className="bg-slate-800">
          <p className='text-white'>By Mickael</p>
        </footer>
      </body>
    </html>
  )
}
