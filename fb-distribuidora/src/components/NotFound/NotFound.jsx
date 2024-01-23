
const NotFound = () => {
   return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-6xl font-bold text-emerald-600 italic">404</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl italic">Página no encontrada</h1>
    <p className="mt-6 text-base leading-7  font-semibold text-gray-600 italic ">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a href="/" className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold italic text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Volver al inicio</a>
      <a href="/contacto" className="text-sm font-semibold italic text-gray-900">Soporte de contacto<span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
  )
}

export default NotFound