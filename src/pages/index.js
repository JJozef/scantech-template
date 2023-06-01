/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { LogoIcon } from '@/components/Icons'
import FormLogin from '@/components/FormLogin'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Felipe Template</title>
        <meta name='description' content='Scantech Template Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className} w-full h-screen`}>
        <section className='container m-auto h-full px-3'>
          <article className='grid place-content-center place-items-center h-full'>
            <div className='mb-8 text-center'>
              <h1 className='text-4xl font-bold inline-flex items-center mb-1 space-x-3'>
                <LogoIcon />
                <span>Scantech</span>
              </h1>
              <p className='text-gray-500'>
                Bienvenido, inicie sesión en su panel de control
              </p>
            </div>
            <div className='flex flex-col rounded-md shadow-sm bg-white overflow-hidden'>
              <div className='p-5 lg:p-6 grow w-full'>
                <div className='max-sm:px-6 max-sm:py-6 py-8 px-8'>
                  <FormLogin />
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
