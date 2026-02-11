import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
       <img 
        src={logo} 
        alt="MoodWave Logo" 
        className="w-auto h-48 mb-6 drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
      />
      <h1 className="text-4xl font-bold mb-6 text-center spotify-headline">
  MoodWave
</h1>
      <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl special-gothic-condensed-one-regular">
        Genera playlists personalizadas basadas en tu estado de ánimo
      </p>
      <Link to="/login">
      <button className="bg-green-500 hover:bg-green-600 text-center text-white font-bold py-4 px-8 rounded-full text-lg transition-colors">
        Conectar con Spotify
      </button>
      </Link>
    </div>
  )
}