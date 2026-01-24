import { cookiesValidation } from '@/lib/cookies'
import { DEKA_ZONES } from '@/lib/dekaZones'
import NewTrainingForm from '@/ui/zones/NewTrainingForm'
import ZonePageHeader from '@/ui/zones/ZonePageHeader'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'

interface AsyncProps {
  params: Promise<{ id: string }>
}
export default async function NewTrainingPage({ params }: AsyncProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const { validToken, userId } = await cookiesValidation(cookieStore)
  if (!validToken || !userId) {
    redirect('/auth')
  }
  if (!id || Number(id) > 10 || Number(id) < 1) {
    return notFound()
  }
  const zone = DEKA_ZONES.find((z) => z.id === Number(id))
  if (!zone) {
    return notFound()
  }
  return (
    <main className="min-h-screen bg-linear-to-br from-zinc-900 via-black to-zinc-900 font-sans">
      <div className="flex flex-col gap-5 relative bg-transparent">
        <div className="absolute inset-0 bg-black/20"></div>
        <ZonePageHeader id={Number(id)} name={zone?.name as string} />
        <NewTrainingForm zoneId={Number(id)} userId={userId} />
      </div>
    </main>
  )
}
