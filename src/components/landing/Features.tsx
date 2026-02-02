export const Features = () => {
  return (
   <div className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <h2 className="text-4xl text-center text-white mb-12">
        ¿Qué hace MoodWave?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        
        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="text-center text-5xl mb-4">🎭</div>
          <h3 className="text-2xl text-center font-bold text-white mb-2 limelight-regular">Mood Selector</h3>
          <p className="text-gray-400 text-center limelight-regular">Elige tu estado de ánimo visualmente</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="text-5xl text-center mb-4">📊</div>
          <h3 className="text-2xl text-center font-bold text-white mb-2 limelight-regular">Tu ADN Musical</h3>
          <p className="text-gray-400 text-center limelight-regular">Análisis de tus gustos musicales</p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="text-5xl text-center mb-4">🎧</div>
          <h3 className="text-2xl text-center font-bold text-white mb-2 limelight-regular">Playlists IA</h3>
          <p className="text-gray-400 text-center limelight-regular">Generadas con inteligencia artificial</p>
        </div>


        
      </div>
    </div>
  )
}