/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Container from '@/components/Container'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function LayoutDashboard({ children }) {
  return (
    <>
      <Head>
        <title>Dashboard | Scantech Template</title>
        <meta name='description' content='Scantech Template Dashboard Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={`${inter.className}`}>{children}</Container>
    </>
  )
}
