import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    // State declarations
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({}); // Renamed to cartItems
    const navigate = useNavigate()

    // Add to cart functionality
    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size");
            return;
        }

        // Clone cartItems and update the cart
        const cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        setCartItems(cartData);
        toast.success("Item added to cart!");
    };

    // Calculate the total count of items in the cart
    const getCartCount = () => {
        let totalCount = 0;

        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                try {
                    if (cartItems[itemId][size] > 0) {
                        totalCount += cartItems[itemId][size];
                    }
                } catch (error) {
                    console.error("Error calculating cart count:", error);
                }
            }
        }
        return totalCount;
    };

    // Currency and delivery fee
    const currency = "$";
    const delivery_fee = 10;

    const updateQuantity = (itemId, size, quantity) => {
        const cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };


    const getCartAmount = ()=>{
        let  totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                }catch(error){

                }
            }
        }
        return totalAmount;
    }


    // Context value
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        addToCart,
        cartItems, // Updated here
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
