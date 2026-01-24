'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ZonePageHeaderProps {
  id: number
  name: string
}
const ZonePageHeader = ({ id, name }: ZonePageHeaderProps) => {
  const location = usePathname()
  const isNewTrainingPage = location.includes('new-training')
 
  return (
    <div className="relative bg-transparent text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative px-4 py-6 sm:py-12 md:py-16 max-w-4xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            ZONA {id}
          </div>
          <section className="flex flex-col gap-5 w-full items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
            {!isNewTrainingPage && (
              <Link href={`/zone/${id}/new-training`} className="w-[80%] sm:w-[50%] rounded-xl bg-red-700 text-red-50 font-bold px-4 py-2">
                Registrar nuevo entrenamiento
              </Link>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
export default ZonePageHeader
