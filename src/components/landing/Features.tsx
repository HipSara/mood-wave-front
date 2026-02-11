import SpotlightCard from '../SpotlightCard';

export const Features = () => {
  return (
    <div className="py-24">
      {/* ↑ Quité absolute y bg-gray-900, cambié py-20 a py-24 */}
      
      <div className="max-w-6xl mx-auto px-4">
        {/* ↑ Agregué contenedor para consistencia */}
        
        <h2 className="text-4xl md:text-5xl text-center text-white mb-12 spotify-headline">
          ¿Qué hace MoodWave?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="text-center text-5xl mb-4">🎭</div>
            <h3 className="text-2xl text-center font-bold text-white mb-2">
              Mood Selector
            </h3>
            <p className="text-gray-400 text-center">
              Elige tu estado de ánimo visualmente
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(255, 0, 128, 0.25)"
          >
            <div className="text-5xl text-center mb-4">📊</div>
            <h3 className="text-2xl text-center font-bold text-white mb-2">
              Tu ADN Musical
            </h3>
            <p className="text-gray-400 text-center">
              Análisis de tus gustos musicales
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 255, 128, 0.25)"
          >
            <div className="text-5xl text-center mb-4">🎧</div>
            <h3 className="text-2xl text-center font-bold text-white mb-2">
              Playlists IA
            </h3>
            <p className="text-gray-400 text-center">
              Generadas con inteligencia artificial
            </p>
          </SpotlightCard>

        </div>
      </div>
    </div>
  )
}