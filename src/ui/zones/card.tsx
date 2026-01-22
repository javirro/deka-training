import { DekaZone } from '@/lib/dekaZones'
import Link from 'next/dist/client/link'

const DekaZoneCard = ({ zone, validToken }: { zone: DekaZone; validToken: boolean }) => {
  return (
    <Link
      href={validToken ? `/zone/${zone.id}` : '#'}
      className="w-full sm:w-[30%] sm:h-[240px] flex flex-col border border-red-950 rounded-lg p-4 shadow-md bg-transparent/20 hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-bold mb-2 text-red-600">
        {zone.id}- {zone.name}
      </h2>
      <p className="text-gray-200 mb-4 font-light">{zone.description}</p>
      <div className="text-lg font-semibold">
        {zone.reps} {zone.unit}
      </div>
      {zone.men && <div className="text-sm text-red-700">Hombres: {zone.men}</div>}
      {zone.women && <div className="text-sm text-red-700">Mujeres: {zone.women}</div>}
    </Link>
  )
}

export default DekaZoneCard
