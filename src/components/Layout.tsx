import { ReactNode } from 'react'
import localFont from 'next/font/local'

const inter = localFont({
  src: '../pages/Inter.var.woff2',
  weight: 'variable',
  variable: '--font-inter',
  preload: true,
  display: 'swap',
})

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className={`${inter.variable} flex h-screen flex-col justify-between font-sans`}>
        <main className="mb-auto">{children}</main>
      </div>
    </div>
  )
}

export default Layout
