import { useContext, useParams, useEffect } from "react"
import { CarritoContext } from "../contexto/CarritoContex"

const DetalleProducto = () => {
    const {productos} = useContext(CarritoContext);
    

    const {id} = useParams();

    useEffect(()=>{
        const productoDetalle = productos.find((item) => item.id === parseInt(id));

        if(productoDetalle){
            
        }
    }, [id]    )

   

    console.log(id);
    

    if(!productoDetalle) {
        return <p>Producto no encontrado</p>
    }

    return (
        <div>
            <h2>{productoDetalle.destino}</h2>
            <p>{productoDetalle.características}</p>
            <p>{productoDetalle.días} días - {productoDetalle.precio}€</p>
            <p>{productoDetalle.hoteles.join(", ")}</p>
            <p>Todo incluido: {productoDetalle.todoIncluido ? "Sí" : "No"}</p>
        </div>
    )

}

export default DetalleProducto