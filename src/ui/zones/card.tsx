import { DekaZone } from '@/lib/dekaZones'
import Link from 'next/dist/client/link'

const DekaZoneCard = ({ zone, validToken }: { zone: DekaZone; validToken: boolean }) => {
  return (
    <Link href={validToken ? `/zone/${zone.id}` : '#'} className="w-full sm:w-[30%]">
      <div className="relative bg-linear-to-r from-red-600 to-red-700 text-white rounded-xl sm:h-130 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow sm:min-h-130 ">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 py-6 sm:py-12 md:py-16 max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              ZONA {zone.id}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{zone.name}</h1>
            <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-2xl mx-auto">{zone.description}</p>
          </div>

          {/* Stats Cards */}
          <div className="mt-4 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-xs sm:text-sm text-red-100 mb-1">Repeticiones</div>
              <div className="text-2xl sm:text-3xl font-bold">
                {zone.reps} {zone.unit}
              </div>
            </div>
            {(zone.men || zone.women) && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-xs sm:text-sm text-red-100 mb-1">Peso</div>
                <div className="text-lg sm:text-xl font-bold">
                  {zone.men && <div>♂ {zone.men}</div>}
                  {zone.women && <div>♀ {zone.women}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DekaZoneCard
