'use client'

import { useState } from 'react'
import { InputLWithLabel } from '../base/Input'
import { addNewTrainingAction } from '@/actions/addNewTrainingAction'
import Link from 'next/dist/client/link'

interface NewTrainingFormProps {
  zoneId: number
  userId: number
}
const NewTrainingForm = ({ zoneId, userId }: NewTrainingFormProps) => {
  const [date, setDate] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) {
      return
    }
    setLoading(true)
    setError('')
    const { success, txHash, error } = await addNewTrainingAction(date, minutes, seconds, zoneId, userId)
    if (success) {
      console.log('Training added successfully with tx hash:', txHash)
      setSuccess('Entrenamiento registrado')
    } else {
      console.error('Error adding training:', error)
      setError('Ocurrió un error al añadir el entrenamiento')
    }
    setLoading(false)
  }
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-white">Nuevo Entrenamiento</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputLWithLabel type="date" label="Fecha" value={date} handleInputChange={handleDateChange} />
          <div>
            <label className="block text-white mb-1" htmlFor="notes">
              Tiempo (Minutos - Segundos)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="minutes"
                className="w-1/2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white"
                placeholder="Minutos"
                min={0}
                max={60}
                step={1}
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              />
              <input
                type="number"
                id="seconds"
                className="w-1/2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white"
                placeholder="Segundos"
                value={seconds}
                min={0}
                max={60}
                step={1}
                onChange={(e) => setSeconds(Number(e.target.value))}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white font-bold py-2 rounded-lg hover:bg-red-800 transition-colors disabled:opacity-50"
            disabled={loading || !date}
          >
            {loading ? 'Guardando....' : 'Guardar entrenamiento'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && (
            <div className="flex w-full justify-center items-center gap-1">
              <p className="text-green-400 text-sm mt-2">✅ {success}.</p>
              <Link href={`/zone/${zoneId}`} className="mt-2 text-green-400 font-semibold underline">
                Ver historial
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default NewTrainingForm
