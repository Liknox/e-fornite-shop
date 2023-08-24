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

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
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
