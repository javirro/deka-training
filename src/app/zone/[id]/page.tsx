import { cookiesValidation } from '@/lib/cookies'
import { cookies } from 'next/dist/server/request/cookies'
import { redirect } from 'next/navigation'

interface AsyncProps {
  params: Promise<{ id: string }>
}

export default async function ZonePage({ params }: AsyncProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const { validToken } = await cookiesValidation(cookieStore)
  if (!validToken) {
    redirect('/auth')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black py-8">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Zone {id}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">Welcome to Deka Zone {id}! This is a protected area.</p>
    </main>
  )
}
