import { convertSecondsToTimeString } from '@/lib/time'
import { getZoneTrainingsPaginated } from '@/lib/contracts/smartContractFunctions'

interface LastTrainingsProps {
  userId: number
  zoneId: number
}

export const LastTrainings = async ({ userId, zoneId }: LastTrainingsProps) => {
  const data = await getZoneTrainingsPaginated(userId, zoneId, 0)

  if (!data || data.length === 0) {
    return (
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/50">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-center gap-2">
          <span className="text-2xl">📊</span>
          Historial de Entrenamientos
        </h3>
        <div className="text-center py-8 sm:py-12">
          <div className="text-6xl mb-4">🏃</div>
          <p className="text-gray-400 text-base sm:text-lg">Aún no tienes entrenamientos registrados</p>
          <p className="text-gray-500 text-sm mt-2">¡Empieza tu primer entrenamiento!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-2xl">📊</span>
          Historial
        </h3>
        <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          {data.length} {data.length === 1 ? 'registro' : 'registros'}
        </span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {data.map((training, index) => (
          <div
            key={index}
            className="bg-zinc-900/50 rounded-xl p-4 sm:p-5 border border-zinc-700/30 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Left side - Date */}
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 rounded-lg p-2.5 sm:p-3">
                  <span className="text-xl sm:text-2xl">📅</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Fecha</div>
                  <div className="text-white font-semibold text-sm sm:text-base">
                    {training.date}
                  </div>
                </div>
              </div>

              {/* Right side - Time */}
              <div className="flex items-center gap-3 sm:justify-end">
                <div className="bg-green-600/20 rounded-lg p-2.5 sm:p-3">
                  <span className="text-xl sm:text-2xl">⏱️</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Tiempo</div>
                  <div className="text-green-400 font-bold text-lg sm:text-xl font-mono">
                    {convertSecondsToTimeString(training.timeInSeconds)}
                  </div>
                </div>
              </div>
            </div>

            {/* Position indicator */}
            {index === 0 && (
              <div className="mt-3 pt-3 border-t border-zinc-700/50">
                <span className="inline-flex items-center gap-1.5 bg-yellow-600/20 text-yellow-400 px-2.5 py-1 rounded-full text-xs font-semibold">
                  <span>🏆</span> Más reciente
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer info */}
      <div className="mt-4 sm:mt-6 pt-4 border-t border-zinc-700/30">
        <p className="text-gray-500 text-xs sm:text-sm text-center">
          Mostrando los últimos {data.length} entrenamientos
        </p>
      </div>
    </div>
  )
}
