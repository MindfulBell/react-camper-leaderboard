import React from 'react';
import {render} from 'react-dom';
require("!style!css!sass!../public/css/style.scss");
import Table from './table.jsx';
import axios from 'axios';	
import Loader from 'react-loader';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recentArr: [],
			alltimeArr: [],
			arrToUse: [],
			recentClass: 'seen',
			alltimeClass: 'unseen',
			loaded: false
		}
	}

	componentWillMount() {
		axios.all([
		axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent'),
		axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
		]).then(axios.spread( (recentResponse, alltimeResponse) => {
			const myRecentArr = recentResponse.data.map((user,ind) => {
				return {username: user.username, rank: ind+1, img: user.img, recpoints: user.recent, alltimepoints: user.alltime}
			})
			const myalltimeArr = alltimeResponse.data.map((user,ind) => {
				
				return {username: user.username, rank: ind+1, img: user.img, recpoints: user.recent, alltimepoints: user.alltime}
			})
			this.setState({
				recentArr: myRecentArr, 
				alltimeArr: myalltimeArr,
				arrToUse: myRecentArr,
				loaded: true				
			});
		}));
	}

	processClick(clickedItem) {
			this.setState({arrToUse: clickedItem})
			if (clickedItem === this.state.recentArr) {
				this.setState({
					recentClass: 'seen',
					alltimeClass: 'unseen'
				})
			}
			else {
				this.setState({
					recentClass: 'unseen',
					alltimeClass: 'seen'
				})
			}

		}

	render () {
		return (	
		<div class='container-fluid' id='wrapper'>
		<Loader loaded={this.state.loaded} color={'#207D38'}>			
				<Table usersToRender={this.state.arrToUse}
				recentIcon={this.state.recentClass}
				alltimeIcon={this.state.alltimeClass} 
				tableClick={this.processClick.bind(this)} //why did i have to bind?! Need to learn this
				recentArr={this.state.recentArr} 
				alltimeArr={this.state.alltimeArr} />	
		</Loader>		
		</div>
		)
	}
}

render(<App/>, document.getElementById('app'));


// axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent');
//     	axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')