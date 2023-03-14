import TopBar from '../components/top-bar/top-bar'
import './../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <TopBar></TopBar>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}
