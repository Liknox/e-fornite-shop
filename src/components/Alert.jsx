import { useEffect, useContext } from "react"
import { ShopContext } from "../context"

function Alert(props) {
	const { alertName: name, closeAlert } = useContext(ShopContext)

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 2000)
		return () => {
			clearTimeout(timerId)
		}
	}, [name])
	return (
		<div id="toast-container">
			<div className="toast toast-item">{name} was added to the basket</div>
		</div>
	)
}

export default Alert
