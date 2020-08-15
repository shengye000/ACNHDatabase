import React from 'react'
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet'

class SeaDetails extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            sea: {}
        }
    }
	
	componentDidMount() {
		fetch(`/api/${this.props.location.pathname}`).then(r => r.json()).then(sea_by_ID => {
			this.setState({sea: sea_by_ID})
        })
	}
	
	render() {
		function switchMonth(month){
			switch(month){
				case 1:
					month = "January";
					break;
				case 2:
					month = "February";
					break;
				case 3:
					month = "March";
					break;
				case 4:
					month = "April";
					break;
				case 5:
					month = "May";
					break;
				case 6:
					month = "June";
					break;
				case 7:
					month = "July";
					break;
				case 8:
					month = "August";
					break;
				case 9:
					month = "September";
					break;
				case 10:
					month = "October";
					break;
				case 11:
					month = "November";
					break;
				case 12:
					month = "December";
			}
			return month;
		}
		
		function monthFormatter(str){
			var cell = String(str);
			if (cell === "All Year"){
				return "All Year"
			}
			else if (cell.includes("&")){
				var field = cell.split("&");
				var monthOne = (field[0]).split("-");
				var monthTwo = (field[1]).split("-");
				var monthOneBegin = switchMonth(parseInt(monthOne[0]));
				var monthOneEnd = switchMonth(parseInt(monthOne[1]));
				var monthTwoBegin = switchMonth(parseInt(monthTwo[0]));
				var monthTwoEnd = switchMonth(parseInt(monthTwo[1]));
				return monthOneBegin + " - " + monthOneEnd + ", " + monthTwoBegin + " - " + monthTwoEnd;
			}
			else{
				var field = cell.split("-");
				var monthBegin = switchMonth(parseInt(field[0]));
				var monthEnd = switchMonth(parseInt(field[1]));
				return monthBegin + " - " + monthEnd;
			}
		}
		
		const title = "ACNH Database: Sea Details"
		const sea = this.state.sea
		return(
			<div>
				<Helmet>
					<title>{title}</title>
				</Helmet>
				<br/>
				<div class="borderdiv">
					<div class="row no-gutters">
						<div class="col-md-3">
							<img src={sea.image} class="card-img" alt=""
								 style={{maxHeight: '100%', maxWidth: '100%'}}/>
						</div>
						<div class="col-md-6">
							<div class="card-body">
								<h1 class="card-title capitalize"><b>Name: {sea.name}</b></h1>
								<p class="card-text"><b>Month(s) Available in the Northern Hemisphere: </b> {monthFormatter(sea.monthNorth)} </p>
								<p class="card-text"><b>Month(s) Available in the Southern Hemisphere:</b> {monthFormatter(sea.monthSouth)} </p>
								<p class="card-text"><b>Time Available:</b> {sea.time} </p>
								<p class="card-text"><b>Movement Speed:</b> {sea.speed} </p>
								<p class="card-text"><b>Shadow Size:</b> {sea.shadow} </p>
								<p class="card-text"><b>Selling Price:</b> {sea.price} </p>
								<p class="card-text"><b>Catch Phrase:</b> {sea.catchPhrase} </p>
								<p class="card-text"><b>Museum Phrase:</b> {sea.museumPhrase} </p>
							</div>
						</div>
						<div class="col-md-3">
							<img src={sea.icon} class="card-img" alt=""
								 style={{maxHeight: '100%', maxWidth: '100%'}}/>
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

export default SeaDetails;