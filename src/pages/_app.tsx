import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  )
}
