import React from 'react'
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet'

class ItemDetails extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }
	

	componentDidMount() {
		fetch(`/api/${this.props.location.pathname}`).then(r => r.json()).then(item_by_ID => {
			this.setState({item: item_by_ID})
        })
	}
	
	render() {
		function booleanFormatter(bool) {
			var cell = Boolean(bool)
			if(cell === true){
				return ("Yes")
			}
			return ("No")
		}
		
		function kitCostFormatter(str) {
			var cell = String(str)
			if(cell === '-1'){
				return "Not Customizable"
			}
			return parseInt(cell)
		}
		
		function buyFormatter(price) {
			var cost = parseInt(price)
			if(Number.isNaN(cost)){
				return "Not Purchasable"
			}
			return cost
		}
		
		function emptyFormatter(str) {
			var cell = String(str)
			if(cell === ''){
				return "N/A"
			}
			return cell
		}
		
		const title = "ACNH Database: Item Details"
		const item = this.state.item
		return(
			<div class="frontpagepadding">
				<Helmet>
					<title>{title} </title>
				</Helmet>
				<br/>
				<div class="borderdiv">
					<div class="row no-gutters">
						<div class="col-md-4">
							<img src={item.image} class="card-img" alt=""
								 style={{maxHeight: '100%', maxWidth: '100%'}}/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h1 class="card-title capitalize"><b>Name: {item.name}</b></h1>
								<p class="card-text"><b>Customizable?:</b> {booleanFormatter(item.canCustomize)} </p>
								<p class="card-text"><b>Customize Kit Cost:</b> {kitCostFormatter(item.kitCost)} </p>
								<p class="card-text"><b>Size: </b> {item.size} </p>
								<p class="card-text"><b>Where To Find:</b> {item.source} </p>
								<p class="card-text"><b>Interactable?:</b> {booleanFormatter(item.isInteractive)} </p>
								<p class="card-text"><b>Purchase Price:</b> {buyFormatter(item.buyPrice)} </p>
								<p class="card-text"><b>Selling Price:</b> {item.sellPrice} </p>
								<p class="card-text"><b>Category:</b> {item.category} </p>
								<p class="card-text"><b>Variants:</b> {emptyFormatter(item.variant)} </p>
							</div>
						</div>
					</div>
				</div>
				<br/>
				<div class="text-center">
					<Link to={{pathname:`/`}}>Return to home page</Link>
				</div>
			</div>
		)
	}
}

export default ItemDetails;