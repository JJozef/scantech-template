import Header from './Header'

export default function Container({ className, children }) {
  return (
    <main className={`flex flex-auto flex-col max-w-full ${className}`}>
      <Header />
      <div className='container xl:max-w-7xl mx-auto p-4 lg:p-8'>
        <div className='rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-800 px-1 py-1'>
          {children}
        </div>
      </div>
    </main>
  )
}
