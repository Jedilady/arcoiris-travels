import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { CarritoContext } from "../contexto/CarritoContex"

const DetalleProducto = () => {
    const {productos} = useContext(CarritoContext);
    const {id} = useParams();
    const [productoDetalle, setProductoDetalle] = useState(null);

    useEffect(()=>{
        const prod = productos.find((item) => item.id === parseInt(id));
        setProductoDetalle(prod);
    }, [id, productos])

    console.log(id);
    

    if(!productoDetalle) {
        return <p>Producto no encontrado</p>
    }

    return (
        <div>
            <img
                src={productoDetalle.imagen}
                alt={`${productoDetalle.destino} fotos`}
            />
            <h2>{productoDetalle.destino}</h2>
            <p>{productoDetalle.características}</p>
            <p>{productoDetalle.días} días - {productoDetalle.precio}€</p>
            <p>{productoDetalle.hoteles.join(", ")}</p>
            <p>Todo incluido: {productoDetalle.todoIncluido ? "Sí" : "No"}</p>
        </div>
    )

}

export default DetalleProducto