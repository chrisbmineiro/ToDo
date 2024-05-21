import './App.css'
import { Header, Content, Footer } from './components'
import { Inicial } from './pages'

function App(){
  return (
    <>
      <Header />
      <Content>
        <Inicial /> 
      </Content>
      <Footer criador='Christopher' />
    </>
    )
}

export { App }
