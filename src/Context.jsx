import { createContext, useState } from "react";
import { allItems } from "./AlbumData";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const addToCart = (albumName) => {
        const album = allItems.find(item => item.album === albumName);
        if (album) {
            setCart((c) => [...c, album]);
        }
    }

    const removeFromCart = (albumName) => {
        setCart((c) => {
            const index = c.findIndex(item => item.album === albumName);
            if (index !== -1) {
                return [...c.slice(0, index), ...c.slice(index + 1)];
            }
            return c;
        });
    }

    const removeAllFromCart = () => {
        setCart([]);
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.salePrice, 0);
    }

    const contextValue = { addToCart, removeFromCart, removeAllFromCart, getTotalPrice, cart };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
