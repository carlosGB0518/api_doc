import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import Listar from './componentes/listar'
import Original from './componentes/original'
import Aleatorios from './componentes/aleatorios'
import Favoritos from './componentes/favoritos'
import Usuario from './componentes/usuario'
import Detalle from './componentes/detalle'
import Menu from './componentes/menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppProvider>
    <Router>
      <Menu />
        <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Original />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/:nombre" element={<Detalle />} />
        <Route path="/detalle/:name" element={<Detalle />} />
        </Routes>
   
    </Router>
    </AppProvider>
  );
}

export default App
