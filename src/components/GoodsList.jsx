import { useContext } from "react"
import { ShopContext } from "../context"
import GoodsItem from "./GoodsItem"

const GoodsList = props => {
	const { goods = [] } = useContext(ShopContext)
	return <div className="goods">{goods.length ? goods.map(e => <GoodsItem key={e.id} {...e} />) : <h3>Nothing's here</h3>}</div>
}

export default GoodsList
