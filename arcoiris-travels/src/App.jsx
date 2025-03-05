import './App.css'
import { ListaProductos } from './componentes/ListaProductos';
import { CarritoProvider } from './contexto/CarritoContex';
import { Routes, Route } from "react-router-dom"
import DetalleProducto from './componentes/DetalleProducto';

function App() {


  return (
    <>
    <CarritoProvider>
      <Routes>
        <Route path='/products' element={<ListaProductos/>}/>
        <Route path='/products/:id' element={<DetalleProducto/>}/>
      </Routes>
    </CarritoProvider>
    </>
  )
}

export default App
