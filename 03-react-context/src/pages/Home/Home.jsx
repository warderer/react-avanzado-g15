import './home.css'
import SongList from '@/components/SongList'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>Lado Izquierdo</h2>
        <SongList />
      </div>

      <div className='derecho'>
        <h2>Lado Derecho</h2>
      </div>
    </div>
  )
}

export default Home
