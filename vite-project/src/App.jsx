import './App.css'
import { Header, Conteudo, Footer } from './components'
import { Inicial } from './pages'

function App(){
  return (
    <>
      <Header />
      <Conteudo>
      <Inicial /> 
      </Conteudo>
      <Footer criador='Christopher' />
    </>
    )
}

export { App }
