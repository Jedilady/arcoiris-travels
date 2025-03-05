import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../contexto/CarritoContex"

const CarritoLista = () => {

    const {productosCarrito, incrementoPasajeros, decrementoPasajeros, deleteViaje} = useContext(CarritoContext);

    //useState para precio
    const [precio, setPrecio] = useState(0);

    //funcion calculo del precio total

    useEffect(() => {
        setPrecio(productosCarrito.reduce((acc, currentValue)  => acc + currentValue.precio * currentValue.pasajeros, 0));
    } ,[productosCarrito])
    


  return (
    <div>
        {productosCarrito.map((producto) => (
            <li key={producto.id}>
                <button onClick={() => decrementoPasajeros(producto)}>-</button>
                    {producto.destino}- x {producto.pasajeros}
                <button onClick={() => incrementoPasajeros(producto)}>+</button>
                <button onClick={() => deleteViaje(producto.id)}>Eliminar Viaje</button>
            </li>
        ))}
         {/*Calcular el precio total de los viajes en el carrito */}
         <p>Total: {precio} €</p>
    </div>
  )
}

export default CarritoLista;
