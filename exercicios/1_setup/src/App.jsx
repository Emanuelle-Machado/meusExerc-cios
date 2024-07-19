
import './App.css'

import BomDia from './components/BomDia';
import BotaoAzul from './components/BotaoAzul';
import BotaoEstilizado from './components/BotaoEstilizado';
import Button from './components/Button';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Descricao from './components/Descricao';
import Exercises from './components/Exercises';
import Form from './components/Form';
import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import NumberList from './components/NumberList';
import Pai from './components/Pai';
import PaiFunction from './components/PaiFunction';
import RenderCondicional from './components/RenderCondicional';
import TaskList from './components/TaskList';
import UserInfoForm from './components/UserInfoForm';
import Warning from './components/Warning';
import Welcome from './components/Welcome';


function App() {

  return (
    <>
    {/* 6.1 - criação de componentes */}
      <Welcome />
    {/* 6.2 - Expressões do JSX */}
      <BomDia />
    {/* 6.3 - Componente dentro de componente */}
      <Pai />
    {/* 6.4 - Props */}
      <Descricao nome='Bob' idade={38} />
    {/* 6.5 - Desestruturação de props */}
      <Cachorro nome="Shark" raca="Pastor Alemão" />
    {/* 6.6 - useState -> Hook */}
      <Counter />
    {/* 6.7 - múltiplos estados */}
      <UserInfoForm />
    {/* 6.8 - Eventos */}
      <Button />
    {/* 6.9 - Passando funções de manipulação de eventos como props */}
      <PaiFunction />
    {/* 6.10 - Eventos de Form */}
      <Form />
    {/* 6.11 - Renderização condicional */}
      <RenderCondicional user="Matheus" />
    {/* 6.12 - Expressão ternária */}
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
    {/* 6.13 - Render nulo */}
      <Warning warning="Temos um warning" />
    {/* 6.14 - Listas Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]}/>
    {/* 6.15 - Estilos por atributo */}
      <BotaoEstilizado />
    {/* 6.16 - Estilos globais */}
      <BotaoAzul />
    {/* 6.17 - Exercícios */}
      <Exercises />
    </>
  )
}

export default App
