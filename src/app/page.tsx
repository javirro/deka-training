import { cookiesValidation } from '@/lib/cookies'
import { DEKA_ZONES } from '@/lib/dekaZones'
import DekaZoneCard from '@/ui/zones/card'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = await cookies()
  const { validToken } = await cookiesValidation(cookieStore)
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black py-8">
      <div className="flex flex-wrap w-full p-4 sm:w-[70%] gap-3 items-center">
        {DEKA_ZONES.map((zone) => (
          <DekaZoneCard key={zone.id} zone={zone} validToken={validToken} />
        ))}
      </div>
    </main>
  )
}
