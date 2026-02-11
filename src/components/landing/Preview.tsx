
export const Preview = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Columna izquierda - Imagen/Placeholder */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden">
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
    width="100%"
    height="100%"
    frameBorder="0"
    allow="encrypted-media"
    className="rounded-3xl"></iframe>
</div>
        </div>
        
        {/* Columna derecha - Texto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl text center font-bold text-white mb-6 special-gothic-condensed-one-regular">
            Visualiza tu música de forma única
          </h2>
          <p className="text-xl text center text-gray-300 mb-6">
            Gráficos interactivos que muestran las características de tus canciones: energía, valencia, tempo y más.
          </p>
          <p className="text-lg text center text-gray-400">
            Descubre patrones ocultos en tus gustos musicales y explora tu ADN sonoro como nunca antes.
          </p>
        </div>
        
      </div>
    </div>
  )
}