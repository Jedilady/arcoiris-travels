import './App.css'
import { ListaProductos } from './componentes/ListaProductos';
import { CarritoProvider } from './contexto/CarritoContex';

function App() {


  return (
    <>
    <CarritoProvider>
    <ListaProductos/>
    </CarritoProvider>
    </>
  )
}

export default App
