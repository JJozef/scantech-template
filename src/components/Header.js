import Link from 'next/link'
import { useState } from 'react'
import {
  ArchiveIcon,
  CalendarIcon,
  CaretDownIcon,
  ClockIcon,
  FlagIcon,
  HomeIcon,
  InboxIcon,
  LockIcon,
  LogoIcon,
  MenuIcon,
  SettingsIcon,
  UserAccountIcon
} from './Icons'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='flex flex-none items-center bg-white shadow-sm z-1'>
      <div className='container xl:max-w-7xl mx-auto px-4 lg:px-8'>
        <div className='flex justify-between py-4'>
          <div className='flex items-center'>
            <Link
              href='/dashboard'
              className='group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-700 hover:text-blue-600 active:text-gray-700'
            >
              <LogoIcon />
              <span>ScanTech</span>
            </Link>
          </div>

          <div className='flex items-center space-x-2 lg:space-x-5'>
            <nav className='hidden lg:flex items-center space-x-2'>
              <Link
                href='/dashboard'
                className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-blue-600 border border-blue-100 bg-blue-50'
              >
                <HomeIcon className='inline-block w-5 h-5' />
                <span>Inicio</span>
              </Link>
              <Link
                href='/dashboard/asistencias'
                className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100'
              >
                <ClockIcon className='inline-block w-5 h-5 opacity-25 group-hover:opacity-100' />
                <span>Asistencias</span>
              </Link>
              <Link
                href='/dashboard/proyectos'
                className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100'
              >
                <ArchiveIcon className='inline-block w-5 h-5 opacity-25 group-hover:opacity-100' />
                <span>Proyectos</span>
              </Link>
              <Link
                href='/dashboard/horarios'
                className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100'
              >
                <CalendarIcon className='inline-block w-5 h-5 opacity-25 group-hover:opacity-100' />
                <span>Horarios</span>
              </Link>
            </nav>

            <div className='relative inline-block'>
              <button
                type='button'
                className='inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none'
                aria-haspopup='true'
                aria-expanded='true'
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Usuario</span>
                <CaretDownIcon className='inline-block w-5 h-5 opacity-40' />
              </button>

              <div
                role='menu'
                aria-labelledby='tk-dropdown-layouts-user'
                className={`${
                  isOpen ? 'block' : 'hidden'
                } absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded-lg`}
              >
                <div className='bg-white ring-1 ring-black ring-opacity-5 rounded-lg divide-y divide-gray-100'>
                  <div className='p-2.5 space-y-1'>
                    <Link
                      role='menuitem'
                      href='#'
                      className='group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg text-gray-700 border border-transparent hover:text-blue-800 hover:bg-blue-50 active:border-blue-100'
                    >
                      <InboxIcon className='flex-none inline-block w-5 h-5 opacity-25 group-hover:opacity-50' />
                      <span className='grow'>Mensajes</span>
                      <div className='font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-blue-200 text-blue-700 bg-blue-100'>
                        2
                      </div>
                    </Link>
                    <Link
                      role='menuitem'
                      href='#'
                      className='group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg text-gray-700 border border-transparent hover:text-blue-800 hover:bg-blue-50 active:border-blue-100'
                    >
                      <FlagIcon className='flex-none inline-block w-5 h-5 opacity-25 group-hover:opacity-50' />
                      <span className='grow'>Notificaciones</span>
                      <div className='font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-blue-200 text-blue-700'>
                        5
                      </div>
                    </Link>
                  </div>
                  <div className='p-2.5 space-y-1'>
                    <Link
                      role='menuitem'
                      href='#'
                      className='group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg text-gray-700 border border-transparent hover:text-blue-800 hover:bg-blue-50 active:border-blue-100'
                    >
                      <UserAccountIcon className='flex-none inline-block w-5 h-5 opacity-25 group-hover:opacity-50' />
                      <span className='grow'>Cuenta</span>
                    </Link>
                    <Link
                      role='menuitem'
                      href='#'
                      className='group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg text-gray-700 border border-transparent hover:text-blue-800 hover:bg-blue-50 active:border-blue-100'
                    >
                      <SettingsIcon className='flex-none inline-block w-5 h-5 opacity-25 group-hover:opacity-50' />
                      <span className='grow'>Ajustes</span>
                    </Link>
                  </div>
                  <div className='p-2.5 space-y-1'>
                    <form>
                      <button
                        type='submit'
                        role='menuitem'
                        className='w-full text-left group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg text-gray-700 border border-transparent hover:text-blue-800 hover:bg-blue-50 active:border-blue-100'
                      >
                        <LockIcon className='inline-block w-5 h-5 opacity-25 group-hover:opacity-50' />
                        <span className='grow'>Cerrar sesion</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:hidden'>
              <button
                type='button'
                className='inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className='inline-block w-5 h-5' />
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className='flex flex-col space-y-2 py-4 border-t'>
            <Link
              href='/dashboard'
              className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-blue-600 border border-blue-50 bg-blue-50'
            >
              <HomeIcon className='inline-block w-5 h-5' />
              <span>Inicio</span>
            </Link>
            <Link
              href='/dashboard/asistencias'
              className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100'
            >
              <ClockIcon className='inline-block w-5 h-5 opacity-25 group-hover:opacity-100' />
              <span>Asistencias</span>
            </Link>
            <Link
              href='/dashboard/proyectos'
              className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100'
            >
              <ArchiveIcon className='inline-block w-5 h-5 opacity-25 group-hover:opacity-100' />
              <span>Proyectos</span>
            </Link>
            <Link
              href='/dashboard/horarios'
              className='group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100'
            >
              <CalendarIcon className='inline-block w-5 h-5 opacity-25 group-hover:opacity-100' />
              <span>Horarios</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
