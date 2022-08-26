import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { AuthProvider } from '@/context/Auth.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AuthProvider>
          <Header />
          <Routes />
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
