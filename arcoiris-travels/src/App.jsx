import './App.css'
import { CarritoProvider } from './contexto/CarritoContex';
import { Routes, Route } from "react-router-dom"
import DetalleProducto from './componentes/DetalleProducto';
import Home from './pages/Home';
import Productos from './pages/Productos';
import NavBar from './componentes/NavBar';
import Carrito from './pages/Carrito';

function App() {


  return (
    <>
    <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        {/*To do: arreglar ruta con page */}
        <Route path='/productos/:id' element={<DetalleProducto/>}/>
      </Routes>
    </CarritoProvider>
    </>
  )
}

export default App
