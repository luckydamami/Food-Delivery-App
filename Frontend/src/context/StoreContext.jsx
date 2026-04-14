import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);
export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "https://food-delivery-app-backend-2pbf.onrender.com";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        `${url}/api/cart/add`,
        { itemId },
        { headers: { token } },
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const count = prev[itemId] || 0;
      if (count <= 1) {
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: count - 1 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    if (!food_list) return 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
