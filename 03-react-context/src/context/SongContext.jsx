import { useEffect, useState, createContext, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'
// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información entre diferentes niveles de componentes

// Para usar Context necesitamos seguir una serie de pasos

// #1 Creación de mi contexto vacío
const SongContext = createContext()

// #2 Creación del proveedor del contexto
// Es decir, maneja de donde se obtiene y como se pasa la información
function SongProvider (props) {
  const [list, setList] = useState([]) // data de la API
  const [selectedSong, setSelectedSong] = useState({}) // La canción seleccionada
  const [loading, setLoading] = useState(true) // Nos va a indicar cuando los datos estan disponibles
  const [search, setSearch] = useState('') // Guardo la palabra que busco

  // Simulamos llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  // Tenemos que indicar en el Provider que DATOS debe proveer.
  // Estos datos son públicos para todos los componentes
  const value = {
    list,
    selectedSong,
    setSelectedSong,
    loading,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
// Brindar acceso a la data global de mi contexto
const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumer
export {
  SongProvider,
  useSongContext
}
