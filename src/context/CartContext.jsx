import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    //addProduct va a agregar un producto a cartList
    const addProduct = (producto) => {
        const productIndex = cartList.findIndex((item) => {
            return item.id === producto.id
        })
        console.log(producto, cartList, productIndex)
        if (productIndex !== -1) {
            cartList[productIndex].cantidad += producto.cantidad
            setCartList([...cartList])
            return
        }

        setCartList([...cartList, producto])
    }

    //contar va a retornar la cantidad total de items
    const contar = () => {
        return cartList.reduce((count, producto) => count += producto.cantidad, 0)
    }

    //borrarItem va a remover un item del carrito por 
    const borrarItem = (id) => {
        const newList = cartList.filter((item) => {
            return item.id !== id
        });
        setCartList(newList)
    }

    //vaciarItems va a resetear la lista de items
    const vaciarItems = () => {
        setCartList([])
    }

    //total va a devolver el monto total a pagar
    const total = () => {
        return cartList.reduce((t, producto) => t += producto.cantidad * producto.price, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            contar,
            borrarItem,
            vaciarItems,
            total,

        }}>
            {children}
        </CartContext.Provider>
    )
}
