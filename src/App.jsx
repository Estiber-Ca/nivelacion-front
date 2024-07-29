import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MostrarLugar from './componentes/mostrarLugar';
import AgregarLugar from './componentes/agregarLugar';
import EditarLugar from './componentes/editarLugar';
import Menu from './componentes/menu';
import Footer from './componentes/footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/lugares' element={<MostrarLugar />} />
          <Route path='/lugares/agregar' element={<AgregarLugar />} />
          <Route path='/lugares/editar/:id' element={<EditarLugar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

