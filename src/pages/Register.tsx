import { Link } from 'react-router-dom'
import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa'

export const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white flex items-center justify-center p-4">
      
      <div className="max-w-md w-full bg-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-800 p-8 animate-slide-in-right">
        {/* ↑ Animación aquí: animate-slide-in-right */}
        
        
        <h1 className="text-3xl text-center font-bold mb-6 spotify-headline">
          Regístrate
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">Nombre</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 hover:border-purple-500 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">Email</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 hover:border-purple-500 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">Contraseña</label>
            <input 
              type="password" 
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 hover:border-purple-500 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-1/2 mx-auto block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 rounded-full transition-all transform hover:scale-105"
          >
            Registrarse
          </button>
           <div className="flex items-center my-6">
  <div className="flex-1 border-t border-gray-700"></div>
  <span className="px-4 text-gray-400 text-sm">o</span>
  <div className="flex-1 border-t border-gray-700"></div>
</div>

 <button className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 w-full justify-center">
  <FcGoogle className="w-5 h-5" />
  <span>Continuar con Google</span>
</button>

<button className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 w-full justify-center">
  <FaApple className="w-5 h-5" />
  <span>Continuar con Apple</span>
</button>

<button className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 w-full justify-center">
  <FaSpotify className="w-5 h-5 text-green-500" />
  <span>Continuar con Spotify</span>
</button>
        </form>
        
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-green-500 hover:text-cyan-300 font-bold">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  )
}