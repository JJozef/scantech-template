import Link from 'next/link'

export default function FormLogin() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Diste click en el botón de iniciar sesión')
  }

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div className='space-y-1'>
        <label htmlFor='email' className='font-medium'>
          Email
        </label>
        <input
          className='block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
          type='email'
          name='email'
          placeholder='Introduce tu correo electrónico'
        />
      </div>
      <div className='space-y-1'>
        <label htmlFor='password' className='font-medium'>
          Contraseña
        </label>
        <input
          className='block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
          type='password'
          name='password'
          placeholder='Ingresa tu contraseña'
        />
      </div>
      <div>
        <button
          type='submit'
          className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700'
        >
          Iniciar sesión
        </button>
        <div className='flex items-center mt-3 gap-2'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              id='remember_me'
              name='remember_me'
              className='border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
            />
            <span className='ml-2'>Recuérdame</span>
          </label>
          <Link href='' className='text-blue-600 hover:text-blue-400'>
            ¿Has olvidado tu contraseña?
          </Link>
        </div>
      </div>
    </form>
  )
}
