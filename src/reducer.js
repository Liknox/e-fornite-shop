export function reducer(state, { type, payload }) {
	switch (type) {
		case "SET_GOODS":
			return {
				...state,
				goods: payload || [],
				loading: false,
			}
		//
		case "ADD_ITEM": {
			const itemIndex = state.order.findIndex(e => e.id === payload.id)
			let newOrder = null
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				}
				newOrder = [...state.order, newItem]
			} else {
				newOrder = state.order.map((e, i) => {
					if (i === itemIndex) {
						return { ...e, quantity: e.quantity + 1 }
					} else {
						return e
					}
				})
			}
			return { ...state, order: newOrder, alertName: payload.name }
		}
		case "HANDLE_BASKET_SHOW":
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			}
		case "HANDLE_QUANTITY": {
			if (payload.action === "add") {
				const newOrder = state.order.map(e => (e.id === payload.id ? { ...e, quantity: e.quantity + 1 } : e))
				return { ...state, order: newOrder }
			} else {
				const newOrder = state.order.map(e => (e.id === payload.id && e.quantity !== 1 ? { ...e, quantity: e.quantity - 1 } : e))
				return { ...state, order: newOrder }
			}
		}
		//
		case "REMOVE_ITEM":
			return {
				...state,
				order: state.order.filter(e => e.id !== payload.e),
			}
		case "CLOSE_ALERT":
			return {
				...state,
				alertName: "",
			}

		default:
			return state
	}
}
