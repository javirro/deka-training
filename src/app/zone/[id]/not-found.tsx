import Link from 'next/link'

// This is the not-found.tsx file for handling non-existent zones
// Compulsory to have the file name: not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-zinc-900 via-black to-zinc-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Zona No Encontrada</h1>
      <p className="mb-8">Lo sentimos, la zona que estás buscando no existe.</p>
      <Link href="/" className="px-6 py-3 bg-red-700 rounded-lg hover:bg-red-800 transition-colors">
        Volver al Inicio
      </Link>
    </div>
  )
}
