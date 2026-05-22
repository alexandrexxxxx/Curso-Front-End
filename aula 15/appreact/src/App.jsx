
import './App.css'
import CartaoPerfil from './components/CartaoPerfil.jsx'
import Header from './components/Header'
import funcionarios from './data/funcionarios.js'


    

    



function App() {
  return (
    <div className=''>
      <div className='header'>
        <Header />
        <div className='app'>
          <h1>Nossa Equipe</h1>
          <div className='grade'>
            {funcionarios.map(funcionario => (
              <CartaoPerfil
                key={funcionario.nome}
                imagem={funcionario.img}
                nome={funcionario.nome}
                cargo={funcionario.cargo}
                bio={funcionario.bio}
                habilidades={funcionario.habilidades}
              />
             )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
