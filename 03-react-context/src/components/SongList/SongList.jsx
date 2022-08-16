import { useSongContext } from '@/context/SongContext'
import './songlist.css'

const SongList = () => {
  const context = useSongContext()

  return (
    <section>
      {context.loading
        ? <h1>Cargando...</h1>
        : context.list.map((song) => (
          <div className='row-song' key={song.id}>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </section>
  )
}

export default SongList
