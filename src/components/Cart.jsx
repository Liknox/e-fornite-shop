import { useContext } from "react"
import { ShopContext } from "../context"

const Cart = props => {
	const { order, handleBasketShow } = useContext(ShopContext)
   const quantity = order.length
	return (
		<div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
			<i className="material-icons">shopping_cart</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	)
}

export default Cart
