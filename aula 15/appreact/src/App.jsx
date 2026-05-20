
import './App.css'
import CartaoPerfil from './components/CartaoPerfil.jsx'
import Header from './components/Header'

function App() {
  return (
    <div className=''>
      <div className='header'>
      <Header />
    </div>
    </div>
    <div className='app'>
    <h1>Nossa Equipe</h1>
      <div className='grade'>
    <CartaoPerfil />
    <CartaoPerfil />
    <CartaoPerfil />
    
    </div>
    </div>
  )
}

export default App
