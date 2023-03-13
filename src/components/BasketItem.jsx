const BasketItem = props => {
	const { id, name, price, quantity, removeItem, handleQuantity } = props
	return (
		<li href="#!" className="collection-item">
			{/* {name} x{quantity} = {price * quantity}$ */}
			<div className="part-item">
				<div className="part-item__description">
					<span className="part-item__name">{name}</span>
					<div className="part-item__qty">
						<i className={`material-icons basket-count ${quantity === 1 ? "disabled" : ""}`} onClick={() => handleQuantity(id, "remove")}>
							remove
						</i>
						<span>{quantity}</span>
						<i className="material-icons basket-count" onClick={() => handleQuantity(id, "add")}>
							add
						</i>
					</div>
					<div className="part-item__price">{price * quantity}$</div>
				</div>
				<span className="secondary-content basket-delete" onClick={() => removeItem(id)}>
					<i className="material-icons">delete</i>
				</span>
			</div>
		</li>
	)
}

export default BasketItem
