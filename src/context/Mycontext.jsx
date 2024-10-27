import { createContext, useState } from "react";

export const MyContext = createContext(null);

export const Myprovider = (props) => {

    const [items, setItems] = useState([])

    const removeItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <MyContext.Provider value={{items, setItems, removeItem}}>
            {props.children}
        </MyContext.Provider>
    )
}