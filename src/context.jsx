import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const ShopContext = createContext()

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: ""
}

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState)

	//
	value.addItem = item => {
		dispatch({ type: "ADD_ITEM", payload: item })
	}
	value.handleBasketShow = () => {
		dispatch({ type: "HANDLE_BASKET_SHOW" })
	}
	value.handleQuantity = (id, action) => {
		dispatch({ type: "HANDLE_QUANTITY", payload: { id, action } })
	}
	//
	value.removeItem = id => {
		dispatch({ type: "REMOVE_ITEM", payload: { e: id } })
	}
	value.closeAlert = () => {
		dispatch({ type: "CLOSE_ALERT" })
	}
   value.setGoods = (data) => {
      dispatch({type: "SET_GOODS", payload: data})
   }

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
