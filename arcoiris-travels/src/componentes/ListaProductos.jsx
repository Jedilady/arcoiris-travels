import { useContext } from "react";
import { CarritoContext } from "../contexto/CarritoContex";

export const ListaProductos = () => {
    const {productos} = useContext(CarritoContext);

  return (
    <div>
        <h1>Lista de productos</h1>
        <ul>
            {productos.map((producto)=> (<li key={producto.id}>
                <h2>{producto.destino}</h2>
                <img src={producto.imagen}/>
                <p>{producto.días} días - {producto.precio}€</p>
            </li>))}
        </ul>
    </div>
  )
}
