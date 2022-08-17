import { useSongContext } from '@/context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }

  return (
    song.title
      ? (
        <div>
          Now Playing... {song.title}
          <input type='search' onChange={handleSearch} />
        </div>)
      : <div>Selecciona una canción...</div>
  )
}

export default Header
