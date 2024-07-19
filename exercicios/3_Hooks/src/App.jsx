import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import CalculoPesado from './components/CalculoPesado'
import ContadorCallback from './components/ContadorCallback'
import Exercicio1 from './components/Exercicio1'
import Exercises from './components/Exercises'
import Exercicio2 from './components/Exercicio2'

function App() {

  return (
    <>
      {/* 8.1 - useEffect */}
      <ExemploUseEffect />
      <Timer />
      {/* 8.2 - useContext */}
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/* 8.3 - useReducer */}
      <Contador />
      {/* 8.4 - custom hook */}
      <DisplayWindowSize />
      {/* 8.5 - Slots e children props */}
      <Container>
        <p>mais texto</p>
      </Container>
      {/* 8.6 - sincronizar o estado com props */}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      {/* 8.7 - useMemo e useCallback */}
      <CalculoPesado numero={5} />
      <ContadorCallback />
      {/* Exercícios */}
      <Exercises />
    </>
  )
}

export default App
