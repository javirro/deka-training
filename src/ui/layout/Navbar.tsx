import Link from 'next/link'

const Navbar = ({ validToken }: { validToken: boolean }) => {
  return (
    <nav className="w-full h-16 bg-red-950 flex items-center justify-between px-4">
      <Link href="/" className="text-white font-bold text-lg">Deka 🏆</Link>

      {validToken ? (
        <span className="text-green-400 font-semibold">✅ Autenticado</span>
      ) : (
        <Link href="/auth" className="text-yellow-400">
          Login
        </Link>
      )}
    </nav>
  )
}

export default Navbar
