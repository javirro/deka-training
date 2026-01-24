import { cookiesValidation } from '@/lib/cookies'
import { DEKA_ZONES } from '@/lib/dekaZones'
import { LastTrainings } from '@/ui/zones/LastTrainings'
import ZonePageHeader from '@/ui/zones/ZonePageHeader'
import { cookies } from 'next/dist/server/request/cookies'

import { notFound, redirect } from 'next/navigation'
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
    notFound()
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-zinc-900 via-black to-zinc-900 font-sans">
      {/* Header Hero Section */}
      <ZonePageHeader id={zone.id} name={zone.name} />

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
