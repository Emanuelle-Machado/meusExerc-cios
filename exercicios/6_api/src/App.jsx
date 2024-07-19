import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'
import PostViewer from './components/PostViewer'

function App() {
  return (
    <BrowserRouter>
      {/* 1 - GET com fetch e axios */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fecth posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>
      {/* 2 - contuando requisições - POST e UPDATE/PUT  */}
      <div>
        <Link to="/posts">gerenciar posts</Link>
      </div>
      {/* 3 - tratamento de erros */}
      <div>
        <Link to="/post/1">carregar post 1</Link>
      </div>
      <div>
        <Link to="/post/999">carregar post 999</Link>
      </div>
      {/* 4 - custom hook com api */}
      <div>
        <Link to="/post/2">Carregat post</Link>
      </div>
      <Routes>
        {/* 1 - GET com fetch e axios */}
        <Route path='/fetch-posts' element={<FetchPosts />} />
        <Route path='/axios-posts' element={<AxiosPosts />} />
        {/* 2 - contuando requisições - POST e UPDATE/PUT  */}
        <Route path='/posts' element={<PostManager />} />
        {/* 3 - tratamento de erros */}
        <Route path='/post/:postId' element={<PostLoader />} />
        {/* 4 - custom hook com api */}
        <Route path='/post/view/:postId' element={<PostViewer />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
