import { useEffect, useState, useContext } from "react"
import { API_KEY, API_URL } from "../config"
import { ShopContext } from "../context"
import BasketList from "./BasketList"
import GoodsList from "./GoodsList"
import Preloader from "./Preloader"
import Alert from "./Alert"
import Cart from "./Cart"

const Shop = () => {
	const { loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext)

	// function addItem(item) {
	// 	const itemIndex = order.findIndex(e => e.id === item.id)
	// 	if (itemIndex < 0) {
	// 		const newItem = {
	// 			...item,
	// 			quantity: 1
	// 		}
	// 		setOrder([...order, newItem])
	// 	} else {
	// 		const newOrder = order.map((e, i) => {
	// 			if (i === itemIndex) {
	// 				return { ...e, quantity: e.quantity + 1 }
	// 			} else {
	// 				return e
	// 			}
	// 		})
	// 		setOrder(newOrder)
	// 	}
	// 	setAlertName(item.name)
	// }

	// function removeItem(id) {
	// 	const newOrder = order.filter(e => e.id !== id)
	// 	setOrder(newOrder)
	// }

	// function handleBasketShow() {
	// 	setIsBasketShow(e => !e)
	// 	/* const body = document.querySelector("body")
	// 	body.style.overflow = isBasketShow ? "visible" : "hidden" */
	// }

	// function handleQuantity(id, action) {
	// 	if (action === "add") {
	// 		const newOrder = order.map(e => (e.id === id ? { ...e, quantity: e.quantity + 1 } : e))
	// 		setOrder(newOrder)
	// 	} else {
	// 		const newOrder = order.map(e => (e.id === id && e.quantity !== 1 ? { ...e, quantity: e.quantity - 1 } : e))
	// 		setOrder(newOrder)
	// 	}
	// }

	// function closeAlert() {
	// 	setAlertName("")
	// }

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		})
			.then(res => res.json())
			.then(data => setGoods(data.featured))
	}, [])

	return (
		<main className="container content">
			<Cart quantity={order.length} />
			{loading ? <Preloader /> : <GoodsList />}
			{isBasketShow && <BasketList />}
			{alertName && <Alert />}
		</main>
	)
}

export default Shop
