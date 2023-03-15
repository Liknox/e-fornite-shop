import { useContext } from "react"
import { ShopContext } from "../context"

const GoodsItem = props => {
	const { id, name, description, price, image } = props

	const { addItem } = useContext(ShopContext)

	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card">
					<div className="card-image">
						<img src={image} alt={name} />
					</div>
					<div className="card-content">
						<span className="card-title">{name}</span>
						<p>{description}</p>
					</div>
					<div className="card-action">
						<button className="btn" onClick={() => addItem({ id, name, price })}>
							Buy
						</button>
						<span className="right" style={{ fontSize: "1.8rem" }}>
							{price}$
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GoodsItem
