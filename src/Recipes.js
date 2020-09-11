import React from 'react'
import {Link} from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { Helmet } from 'react-helmet'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import {BrowserView, MobileView} from "react-device-detect";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Tabs, Tab } from 'react-bootstrap';
import BubbleChart from '@weknow/react-bubble-chart-d3';

const TITLE = 'AC:NH Recipes'

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        fetch('/api/recipes/').then(r => r.json()).then(recipe_data => {
            this.setState({recipes: recipe_data.recipes})
        })

    }

    render() {
		const data = this.state.recipes
		//graphs code setup
		let cardColorChart = data.reduce(function(obj, v) {
		  obj[v.cardColor] = (obj[v.cardColor] || 0) + 1;
		  return obj;
		}, {})
		let cardColorList = []
		for (const key in cardColorChart) {
			let tmp = {label: key.charAt(0).toUpperCase() + key.slice(1), value: cardColorChart[key]}
			cardColorList.push(tmp)
		}
		
		let categoryChart = data.reduce(function(obj, v) {
		  obj[v.category] = (obj[v.category] || 0) + 1;
		  return obj;

		}, {})
		let categoryList = []
		for (const key in categoryChart) {
			let tmp = {label: key, value: categoryChart[key]}
			categoryList.push(tmp)
		}
		
		let sourceChart = data.reduce(function(obj, v) {
		  obj[v.source] = (obj[v.source] || 0) + 1;
		  return obj;

		}, {})
		let sourceList = []
		for (const key in sourceChart) {
			let tmp = {label: key, value: sourceChart[key]}
			sourceList.push(tmp)
		}
		
		let recipesToUnlockChart = data.reduce(function(obj, v) {
		  obj[v.recipesToUnlock] = (obj[v.recipesToUnlock] || 0) + 1;
		  return obj;

		}, {})
		let recipesToUnlockList = []
		for (const key in recipesToUnlockChart) {
			let tmp = {label: key, value: recipesToUnlockChart[key]}
			recipesToUnlockList.push(tmp)
		}
		
			
		//Normal Functions
		function nameFormatter(cell, row) {
            return (
                <b className="capitalize"><Link to={{pathname: `/recipes/${row.id}/`}}>{cell}</Link></b> 
            );
        }
		
		function colorFormatter(cell, row) {
            return (
                <p className="capitalize">{cell}</p> 
            );
        }
		
		const selectBuyPrice={
			'Not Purchasable': 'Not Purchasable',
			'280 bells': '280 bells',
			'300 bells': '300 bells',
			'500 bells': '500 bells',
			'800 Nook Miles': '800 Nook Miles',
			'1000 Nook Miles': '1000 Nook Miles',
			'1500 Nook Miles': '1500 Nook Miles',
			'2000 Nook Miles': '2000 Nook Miles',
			'3000 Nook Miles': '3000 Nook Miles',
			'5000 Nook Miles': '5000 Nook Miles'
		}
		
		function buyPriceSort(a, b, order, dataField, rowA, rowB) {
			var sortOrder = ['Not Available','280 bells','300 bells','500 bells','800 Nook Miles',
				'1000 Nook Miles','1500 Nook Miles','2000 Nook Miles','3000 Nook Miles','5000 Nook Miles'];
			if (order === 'asc') {
				return sortOrder.indexOf(a) - sortOrder.indexOf(b);
			}
			return sortOrder.indexOf(b) - sortOrder.indexOf(a);			
		}
		
		const selectSellPrice={
			'200': '200'
		}
				
		const selectSource={
			'5-star town evaluation': '5-star town evaluation',
			'All Villagers': 'All Villagers',
			'All Villagers (while stung)': 'All Villagers (while stung)',
			'All Villagers, Tom Nook': 'All Villagers, Tom Nook',
			'All villagers': 'All villagers',
			'Balloons': 'Balloons',
			'Balloons, Isabelle': 'Balloons, Isabelle',
			'Big Sister villagers': 'Big Sister villagers',
			'Big Sister villagers, Tom Nook': 'Big Sister villagers, Tom Nook',
			"Blathers, Nook's Cranny": "Blathers, Nook's Cranny",
			'Breaking 100 axes': 'Breaking 100 axes',
			'Celeste': 'Celeste',
			'Collecting earth eggs': 'Collecting earth eggs',
			'Collecting leaf eggs': 'Collecting leaf eggs',
			'Collecting sky eggs': 'Collecting sky eggs',
			'Collecting stone eggs': 'Collecting stone eggs',
			'Collecting water eggs': 'Collecting water eggs',
			'Collecting wood eggs': 'Collecting wood eggs',
			'Completing bug Critterpedia': 'Completing bug Critterpedia',
			'Completing fish Critterpedia': 'Completing fish Critterpedia',
			'Cranky villagers': 'Cranky villagers',
			'Cyrus': 'Cyrus',
			'DIY for Beginners': 'DIY for Beginners',
			'Digging up clams': 'Digging up clams',
			'Egg bottle, Egg balloon': 'Egg bottle, Egg balloon',
			'Fishing': 'Fishing',
			'Harvey': 'Harvey',
			'Helping Gulliver 30 times': 'Helping Gulliver 30 times',
			'Jock villagers': 'Jock villagers',
			'Jock villagers, Tom Nook': 'Jock villagers, Tom Nook',
			'Lazy villagers': 'Lazy villagers',
			'Lazy villagers, Tom Nook': 'Lazy villagers, Tom Nook',
			'Learning all egg outfit DIYs': 'Learning all egg outfit DIYs',
			'Nook Miles Exchange': 'Nook Miles Exchange',
			"Nook's Cranny": "Nook's Cranny",
			'Normal villagers': 'Normal villagers',
			'Normal villagers, Tom Nook': 'Normal villagers, Tom Nook',
			'Pascal': 'Pascal',
			'Peppy villagers': 'Peppy villagers',
			'Peppy villagers, Tom Nook': 'Peppy villagers, Tom Nook',
			'Pretty Good Tools Recipes': 'Pretty Good Tools Recipes',
			'Shooting 300 balloons': 'Shooting 300 balloons',
			'Smug villagers': 'Smug villagers',
			'Snooty villagers': 'Snooty villagers',
			'Snowboy': 'Snowboy',
			'Test Your DIY Skills': 'Test Your DIY Skills',
			'Test Your DIY Skills, Tom Nook': 'Test Your DIY Skills, Tom Nook',
			'Tom Nook': 'Tom Nook',
			'Tom Nook, Big Sister villagers': 'Tom Nook, Big Sister villagers',
			'Tom Nook, Cranky villagers': 'Tom Nook, Cranky villagers',
			'Tom Nook, Lazy villagers': 'Tom Nook, Lazy villagers',
			"Tom Nook, Nook's Cranny": "Tom Nook, Nook's Cranny",
			'Tom Nook, Normal villagers': 'Tom Nook, Normal villagers',
			'Tom Nook, Peppy villagers': 'Tom Nook, Peppy villagers',
			'Tom Nook, Smug villagers': 'Tom Nook, Smug villagers',
			'Tom Nook, Snooty villagers': 'Tom Nook, Snooty villagers',
			'Wildest Dreams DIY': 'Wildest Dreams DIY',
			'Zipper': 'Zipper'
		}
		
		const selectrecipesToUnlock={
			'0': '0',
			'50': '50',
			'100': '100',
			'200': '200'
		}
		
		const selectCategory={
			'Dress-Up': 'Dress-Up',
			'Equipment': 'Equipment',
			'Floors': 'Floors',
			'Housewares': 'Housewares',
			'Miscellaneous': 'Miscellaneous',
			'Other': 'Other',
			'Rugs': 'Rugs',
			'Tools': 'Tools',
			'Wall-mounted': 'Wall-mounted',
			'Wallpaper': 'Wallpaper'
		}
		
		const selectColor={
			'beige': 'Beige',
			'blue': 'Blue',
			'brick': 'Brick',
			'brown': 'Brown',
			'dark gray': 'Dark Gray',
			'gold': 'Gold',
			'green': 'Green',
			'light gray': 'Light Gray',
			'No Color': 'No Color',
			'orange': 'Orange',
			'pink': 'Pink',
			'red': 'Red',
			'silver': 'Silver',
			'white': 'White',
			'yellow': 'Yellow'
		}
		
		const defaultSorted = [{
			dataField: 'id',
			order: 'asc'
		}];
		
        const {recipes} = this.state
        const {columns} = {
            columns: [{
                dataField: 'name',
                text: 'Recipe Name',
                sort: true,
				formatter: nameFormatter,
				align: "center",
				headerAlign: 'center',
				filter: textFilter()
            },{
                dataField: 'buyPrice',
                text: 'Purchase Price',
                sort: true,
				sortFunc: buyPriceSort,
				align: "center",
				headerAlign: 'center',
				filter: selectFilter({
					options: selectBuyPrice
				})
            },  {
                dataField: 'sellPrice',
                text: 'Sellling Price',
                sort: true,
				align: "center",
				headerAlign: 'center',
				filter: selectFilter({
					options: selectSellPrice
				})
            }, {
                dataField: 'source',
                text: 'Where To Find?',
                sort: true,
				align: "center",
				headerAlign: 'center',
				filter: selectFilter({
					options: selectSource
				})
            }, {
                dataField: 'recipesToUnlock',
                text: 'Number of Recipes Needed to Unlock',
                sort: true,
				align: "center",
				headerAlign: 'center',
				filter: selectFilter({
					options: selectrecipesToUnlock
				})
            }, {
                dataField: 'category',
                text: 'Category',
                sort: true,
				align: "center",
				headerAlign: 'center',
				filter: selectFilter({
					options: selectCategory
				})
            }, {
                dataField: 'cardColor',
                text: 'Recipe Card Color',
                sort: true,
				align: "center",
				headerAlign: 'center',
				filter: selectFilter({
					options: selectColor
				}),
				formatter: colorFormatter
            }, {
                dataField: 'materials',
                text: 'Materials To Craft',
                sort: false,
				align: "center",
				headerAlign: 'center',
				filter: textFilter()
            }, {
                dataField: 'sourceNotes',
                text: 'Important Notes',
                sort: false,
				align: "center",
				headerAlign: 'center',
				filter: textFilter()
            },{
                dataField: 'id',
                text: 'ID',
                sort: true,
                hidden: true,
            }
            ]
        }
		
		//mobile
		const { SearchBar } = Search;
		const {mobilecolumns} = {
            mobilecolumns: [{
                dataField: 'name',
                text: 'Recipe Name',
				formatter: (cell, row) => {
					return(
						<h5><b>Name: <Link to={{pathname: `/recipes/${row.id}/`}}><div className="capitalize">{cell}</div></Link></b></h5>
					);
				},
				align: "center",
				headerAlign: 'center',
            },{
                dataField: 'buyPrice',
                text: 'Purchase Price',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Purchase Price: </b> {cell} </div>
					);
				}
            },  {
                dataField: 'sellPrice',
                text: 'Sellling Price',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Sell Price: </b> {cell} </div>
					);
				}
            }, {
                dataField: 'source',
                text: 'Where To Find?',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Source: </b> {cell} </div>
					);
				}
            }, {
                dataField: 'recipesToUnlock',
                text: 'Number of Recipes Needed to Unlock',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Number of recipes to Unlock: </b> {cell} </div>
					);
				}
            }, {
                dataField: 'category',
                text: 'Category',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Category: </b> {cell} </div>
					);
				}
            }, {
                dataField: 'cardColor',
                text: 'Recipe Card Color',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Card Color: </b> {colorFormatter(cell, row)} </div>
					);
				}
            }, {
                dataField: 'materials',
                text: 'Materials To Craft',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Materials: </b> {cell} </div>
					);
				}
            }, {
                dataField: 'sourceNotes',
                text: 'Important Notes',
				align: "center",
				headerAlign: 'center',
				formatter: (cell, row) => {
					return(
						<div><b>Important Notes: </b> {cell} </div>
					);
				}
            },{
                dataField: 'id',
                text: 'ID',
                sort: true,
                hidden: true,
				searchable: false
            }
            ]
        }
		
        return (

		
            <div>
				<Helmet>
				  <title>{ TITLE }</title>
				</Helmet>

				<div style={{display: 'flex', justifyContent: 'center'}}>
				  <img src={process.env.PUBLIC_URL + '/recipes.png'} class="card-img" alt="Recipes" 
						style={{maxHeight: '300px', maxWidth: '300px'}}/>
				</div>

				<Tabs defaultActiveKey="table" id="uncontrolled-tab-example" mountOnEnter = 'true' class="nav nav-tabs justify-content-center">
				  <Tab eventKey="table" title="Table">		
					<BrowserView>
						<BootstrapTable
							bootstrap4
							keyField = "id"
							data={ recipes }
							columns={ columns }
							striped
							pagination={ paginationFactory({sizePerPage: 25}) }
							defaultSorted={ defaultSorted } 
							filter={ filterFactory() }
							
						/>
					</BrowserView>
					
					<MobileView>
						<ToolkitProvider
						  keyField="id"
						  data={ recipes }
						  columns={ mobilecolumns }
						  search>
						  {
							props => (
							  <div>
								<div style={{display: 'flex', justifyContent: 'center'}}>
									<SearchBar { ...props.searchProps }/>
								</div> 
								<hr />
								<BootstrapTable
								  { ...props.baseProps }
								  striped
								  pagination={ paginationFactory() }
								/>
							  </div>
							)
						  }
						</ToolkitProvider>
					</MobileView>
				</Tab>
				<Tab eventKey="charts" title="Fun Charts">

				<div class="border border-success">
					  <h3 className='text-center'> Recipes By Source </h3>
					  <h5 className='text-center'> Hint: Hover over the circles or label text to see the label. </h5>
					  <div style={{display: 'flex', justifyContent: 'center'}}>
							<BrowserView>
							<BubbleChart 
							graph={{
								zoom: 1.0,
							}}
							width={1250}
							height={1250}
							padding={1} // optional value, number that set the padding between bubbles
							showLegend={true} // optional value, pass false to disable the legend.
							legendFont={{
								family: 'Arial',
								size: 10,
								color: '#000',
								weight: 'bold',
							}}
							valueFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							labelFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							bubbleClickFunc={this.bubbleClick}
							data={sourceList}
							/>
							</BrowserView>
							
							<MobileView>
								<p className='text-center'> This chart is not viewable on mobile. Please switch to
									a non-mobile web browser. </p>
							</MobileView>
						</div>
					</div>

					<div class="border border-success">
					  <h3 className='text-center'> Recipes By Category </h3>
					  <div style={{display: 'flex', justifyContent: 'center'}}>
							<BrowserView>
							<BubbleChart 
							graph={{
								zoom: 1.0,
							}}
							width={1000}
							height={800}
							padding={1} // optional value, number that set the padding between bubbles
							showLegend={true} // optional value, pass false to disable the legend.
							legendPercentage={20} // number that represent the % of with that legend going to use.
							legendFont={{
								family: 'Arial',
								size: 12,
								color: '#000',
								weight: 'bold',
							}}
							valueFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							labelFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							data={categoryList}
							/>
							</BrowserView>
							
							<MobileView>
								<p className='text-center'> This chart is not viewable on mobile. Please switch to
									a non-mobile web browser. </p>
							</MobileView>
						</div>
					</div>
				
					<div class="border border-success">
					  <h3 className='text-center'> Recipes By Card Color </h3>
					  <div style={{display: 'flex', justifyContent: 'center'}}>
							<BrowserView>
							<BubbleChart 
							graph={{
								zoom: 1.0,
							}}
							width={1000}
							height={800}
							padding={1} // optional value, number that set the padding between bubbles
							showLegend={true} // optional value, pass false to disable the legend.
							legendPercentage={20} // number that represent the % of with that legend going to use.
							legendFont={{
								family: 'Arial',
								size: 12,
								color: '#000',
								weight: 'bold',
							}}
							valueFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							labelFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							data={cardColorList}
							/>
							</BrowserView>
							
							<MobileView>
								<p className='text-center'> This chart is not viewable on mobile. Please switch to
									a non-mobile web browser. </p>
							</MobileView>
						</div>
					</div>
					<div class="border border-success">
					  <h3 className='text-center'> Recipes By Number of Recipes Required To Unlock </h3>
					  <div style={{display: 'flex', justifyContent: 'center'}}>
							<BrowserView>
							<BubbleChart 
							graph={{
								zoom: 1.0,
							}}
							width={1000}
							height={800}
							padding={1} // optional value, number that set the padding between bubbles
							showLegend={true} // optional value, pass false to disable the legend.
							legendPercentage={20} // number that represent the % of with that legend going to use.
							legendFont={{
								family: 'Arial',
								size: 12,
								color: '#000',
								weight: 'bold',
							}}
							valueFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							labelFont={{
								family: 'Arial',
								size: 16,
								color: '#ffffff',
								weight: 'bold',
							}}
							data={recipesToUnlockList}
							/>
							</BrowserView>
							
							<MobileView>
								<p className='text-center'> This chart is not viewable on mobile. Please switch to
									a non-mobile web browser. </p>
							</MobileView>
						</div>
					</div>
				  </Tab>
				</Tabs>
			</div>
        )
    }
}


export default Recipes;