import { getAllProducts } from "../services";
import { createContext, useEffect, useState } from "react";

//INFO relevante : poner dos contextos uno para ListaProductos y otro para Carrito 

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [productos, setProductos] = useState([]);

  //useState para los productos del carrito
  const [productosCarrito, setProductosCarrito] = useState([]);

  //manejadores

  //manejador añadir producto
  const addProductsCarrito = (producto) =>{
    const existingProduct = productosCarrito.find((item) => item.id === producto.id);

    if (existingProduct) {
      alert("Producto ya añadido a su carrito");
    }else{
      setProductosCarrito([...productosCarrito, {...producto, pasajeros: 1}]);
    }

    console.log(producto);
    console.log(productosCarrito);
  }

  //incremento pasajeros
  const incrementoPasajeros = (producto) => {
    setProductosCarrito(productosCarrito.map((item) => item.id === producto.id ? {...item, pasajeros: item.pasajeros + 1} : item));
  }

  //decremento pasajeros (Haemos prueba para no depender de la funcion delete (Hecho en ejercicio anterior de carrito25Feb para solucionar el fallo que me daba el delete))
  const decrementoPasajeros = (producto) => {
    setProductosCarrito(productosCarrito.map((item) => {
      if(item.id === producto.id){
        if (item.pasajeros === 1) {
          return null;
        }else{
          //o llamamos a la funcion de borrar o ...
          return {...item, pasajeros: item.pasajeros -1};
        }
      }
      else {
            // Si no es el producto que buscamos, lo dejamos igual
        return item;
      }
      //hacemos un filter para tener un array con los viajes que no son null
    }).filter(item => item !== null));
  }

  //manejador borrar viaje 
  const deleteViaje = (productoId) => {
    setProductosCarrito(productosCarrito.filter((item) => item.id !== productoId));
  }

  useEffect(() => { 
    setProductos(getAllProducts());
  }, []);

  return (
    <CarritoContext.Provider value={{ productos, addProductsCarrito, productosCarrito, incrementoPasajeros, decrementoPasajeros, deleteViaje}}>
      {children}
    </CarritoContext.Provider>
  );
}
