import './App.css'

import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'
function App() {

  return (
    <>
      {/* 1 - Setup e configuração inicial */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          {/* 2 - NavLink */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact">Contato</NavLink>
          </li>
          {/* 3 - useNavigate */}
          <li><Link to="/login">Login</Link></li>
          {/* 5 - rotas aninhadas */}
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>

        {/* 4 - rotas dinâmicas */}
        <div>
          <h2>tarefas</h2>
          <Link to="/tasks/1">tarefa 1</Link>
          <Link to="/tasks/2">tarefa 2</Link>
          <Link to="/tasks/3">tarefa 3</Link>
        </div>

        {/* 6 - rota 404 */}
        <div>
          <h2>items</h2>
          <Link to="/items/1">Item 1</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* 3 - useNavigate */}
        <Route path='/login' element={<Login />} />
        {/* 4 - rotas dinâmicas */}
        <Route path='/taks/:taskId' element={<TaskDetails />} />
        {/* 5 - rotas aninhadas */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        {/* 6 - rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <p>Rodapé</p>
    </>
  )
}

export default App
