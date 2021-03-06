import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Wallpapers from "./Wallpapers"
import WallpaperDetails from "./details/WallpaperDetails"
import Villagers from "./Villagers";
import VillagerDetails from "./details/VillagerDetails";
import Tools from "./Tools";
import ToolDetails from "./details/ToolDetails";
import Songs from "./Songs";
import SongDetails from "./details/SongDetails";
import Sea from "./Sea";
import SeaDetails from "./details/SeaDetails";
import Rugs from "./Rugs";
import RugDetails from "./details/RugDetails";
import Recipes from "./Recipes";
import RecipeDetails from "./details/RecipeDetails";
import Reactions from "./Reactions"
import ReactionDetails from "./details/ReactionDetails";
import Items from "./Items";
import ItemDetails from "./details/ItemDetails";
import Fossils from "./Fossils";
import FossilDetails from "./details/FossilDetails";
import Floors from "./Floors";
import FloorDetails from "./details/FloorDetails";
import Fish from "./Fish";
import FishDetails from "./details/FishDetails";
import Construction from "./Construction";
import ConstructionDetails from "./details/ConstructionDetails";
import Clothes from "./Clothes";
import ClothDetails from "./details/ClothDetails";
import Bugs from "./Bugs";
import BugDetails from "./details/BugDetails";
import Arts from "./Arts";
import ArtDetails from "./details/ArtDetails";
import About from "./About";
import Search from "./Search";
import FrontPage from "./FrontPage";


class App extends React.Component{
	render() {
        return (
            <div>
				<BrowserRouter>
				<Navigation/>
					<Switch>
						<Route exact path="/wallpapers" component={Wallpapers}/>
						<Route path="/wallpapers/:id" component={WallpaperDetails}/>
						<Route exact path="/villagers" component={Villagers}/>
						<Route path="/villagers/:id" component={VillagerDetails}/>
						<Route exact path="/tools" component={Tools}/>
						<Route path="/tools/:id" component={ToolDetails}/>
						<Route exact path="/songs" component={Songs}/>
						<Route path="/songs/:id" component={SongDetails}/>
						<Route exact path="/sea" component={Sea}/>
						<Route path="/sea/:id" component={SeaDetails}/>
						<Route exact path="/rugs" component={Rugs}/>
						<Route path="/rugs/:id" component={RugDetails}/>
						<Route exact path="/recipes" component={Recipes}/>
						<Route path="/recipes/:id" component={RecipeDetails}/>
						<Route exact path="/reactions" component={Reactions}/>
						<Route path="/reactions/:id" component={ReactionDetails}/>
						<Route exact path="/items" component={Items}/>
						<Route path="/items/:id" component={ItemDetails}/>
						<Route exact path="/fossils" component={Fossils}/>
						<Route path="/fossils/:id" component={FossilDetails}/>
						<Route exact path="/floors" component={Floors}/>
						<Route path="/floors/:id" component={FloorDetails}/>
						<Route exact path="/fish" component={Fish}/>
						<Route path="/fish/:id" component={FishDetails}/>
						<Route exact path="/construction" component={Construction}/>
						<Route path="/construction/:id" component={ConstructionDetails}/>
						<Route exact path="/clothes" component={Clothes}/>
						<Route path="/clothes/:id" component={ClothDetails}/>
						<Route exact path="/bugs" component={Bugs}/>
						<Route path="/bugs/:id" component={BugDetails}/>
						<Route exact path="/art" component={Arts}/>
						<Route path="/art/:id" component={ArtDetails}/>
						<Route path="/search" component={Search}/>
						<Route path="/about" component={About}/>
						<Route exact path="/" component={FrontPage}/>
					</Switch>
				</BrowserRouter>
            </div>
        )
    }
}

export default App;

