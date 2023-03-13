import GoodsItem from "./GoodsItem"

const GoodsList = props => {
	const { goods = [] } = props
	return <div className="goods">{goods.length ? goods.map(e => <GoodsItem key={e.id} {...e} addItem={props.addItem} />) : <h3>Nothing's here</h3>}</div>
}

export default GoodsList
