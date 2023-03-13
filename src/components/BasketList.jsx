import { useEffect } from "react"
import BasketItem from "./BasketItem"

const BasketList = props => {
	const { order = [], handleBasketShow, handleQuantity, removeItem } = props

	const totalPrice = order.reduce((acc, el) => (acc += el.price * el.quantity), 0)

	return (
		<>
			<div className="basket-container" onClick={handleBasketShow}></div>
			<ul className="collection basket-list">
				<li href="#!" className="collection-item active">
					Basket
				</li>
				{order.length ? (
					order.map(e => <BasketItem key={e.id} {...e} removeItem={removeItem} handleQuantity={handleQuantity} />)
				) : (
					<li href="#!" className="collection-item">
						Basket is empty
					</li>
				)}
				<li href="#!" className="collection-item active">
					<div className="basket-buy-now">
						Total price: {totalPrice}$
						<button className={`btn blue darken-4 ${order.length ? "" : "disabled"}`} onClick={() => alert("There's no beckend actions for this!")}>
							buy now
						</button>
					</div>
				</li>
				<i className="material-icons basket-close" onClick={handleBasketShow}>
					close
				</i>
			</ul>
		</>
	)
}

export default BasketList
