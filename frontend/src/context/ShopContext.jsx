import {createContext, useState} from "react";
import {products} from "../assets/assets.js";
import PropTypes from "prop-types";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₺';
    const deliveryFee = 75;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        products, currency, deliveryFee,
        search,setSearch,showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

ShopContextProvider.propTypes = {
    children: PropTypes.node,
}

export default ShopContextProvider;