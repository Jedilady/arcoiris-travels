import { getAllProducts } from "../services";
import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({children}) {
const [productos, setProductos] = useState([]);

useEffect(()=>{
    setProductos(getAllProducts());
}, [])
  return (
    <CarritoContext.Provider value={{productos}}>
        {children}
    </CarritoContext.Provider>
  )
}

