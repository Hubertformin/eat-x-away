import React, {createContext, useState} from 'react';
import {ItemModel} from "../models/item";

interface CartContextProps {
    cart: ItemModel[];
    addToCart: any;
    emptyCart: any;
    removeItem: any;
    cartAmount: any;
    setCartItems: any;
}

export const CartContext = createContext<CartContextProps>({cart: [], addToCart: null, emptyCart: null, removeItem: null, cartAmount: null, setCartItems: null});

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState<any[]>([]);
    const [cartAmount, setCartAmount] = useState(0);

    const addToCart = (item) => {
        const exist = !!cart.find(it => it.id === item.id);
        if (!exist) {
            const _cart = [...cart, item];
            setCart(_cart);
            setCartAmount(getCartAmount(_cart));
        }
    };

    const emptyCart = () => {
        setCart([]);
        setCartAmount(0);
    };

    const removeItem = (id) => {
        const _newData = cart.filter(item => item.id !== id);
        setCart(_newData);
        setCartAmount(getCartAmount(_newData));
    };

    const setCartItems = (items) => {
        setCart([...items]);
        setCartAmount(getCartAmount([...items]));
    };

    const getCartAmount = (data) => {
        let total = 0;
        data.forEach(item => {
            total += Number(item.orderQuantity) * Number(item.unitPrice);
        });
        return total;
    };

    return(
        <CartContext.Provider value={{cart, addToCart, emptyCart, removeItem, cartAmount, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}
