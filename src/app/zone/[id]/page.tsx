
import { cookiesValidation } from '@/lib/cookies'
import { DEKA_ZONES } from '@/lib/dekaZones'
import { LastTrainings } from '@/ui/zones/LastTrainings'
import { cookies } from 'next/dist/server/request/cookies'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

interface AsyncProps {
  params: Promise<{ id: string }>
}

export default async function ZonePage({ params }: AsyncProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const { validToken, userId } = await cookiesValidation(cookieStore)
  if (!validToken || !userId) {
    redirect('/auth')
  }

  const zone = DEKA_ZONES.find((z) => z.id === Number(id))
  if (!zone) {
    redirect('/')
  }
 
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 font-sans">
      {/* Header Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 py-8 sm:py-12 md:py-16 max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              ZONA {id}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {zone.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
              {zone.description}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-xs sm:text-sm text-red-100 mb-1">Repeticiones</div>
              <div className="text-2xl sm:text-3xl font-bold">{zone.reps} {zone.unit}</div>
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

      {/* Content Section */}
      <div className="px-4 py-6 sm:py-8 md:py-12 max-w-4xl mx-auto">
        <Suspense 
          fallback={
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/50 animate-pulse">
              <div className="h-6 bg-zinc-700 rounded w-1/3 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-zinc-700 rounded"></div>
                <div className="h-4 bg-zinc-700 rounded w-5/6"></div>
                <div className="h-4 bg-zinc-700 rounded w-4/6"></div>
              </div>
            </div>
          }
        >
          <LastTrainings userId={userId} zoneId={Number(id)} />
        </Suspense>
      </div>
    </main>
  )
}
