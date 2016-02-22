import React from 'react';
import {render} from 'react-dom';
require("!style!css!sass!../public/css/style.scss");
import Table from './table.jsx';
import $ from 'jquery';
import axios from 'axios';

//Why is the array in state not working when i pass it around?
//do i need to map it again within table to have separate arrays of all the data?

	

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			recentArr: [],
			alltimeArr: []
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
				
				return {username: user.username, rank: ind+1, img: user.img, alltimepoints: user.alltime}
			})
			this.setState({
				recentArr: myRecentArr, 
				alltimeArr: myalltimeArr
			});
		}));
	}

	render () {
		return <Table topRecentUsers={this.state.recentArr} topAlltimeUsers={this.state.alltimeArr} />;
	}
}

render(<App/>, document.getElementById('app'));


// axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent');
//     	axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')