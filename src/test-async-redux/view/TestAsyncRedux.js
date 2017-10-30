import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class TestAsyncRedux extends Component{

	fetchWeather = () => {

		//fetch('http://www.weather.com.cn/data/cityinfo/' + action.cityId + '.html').then((data) => {
		/*fetch('/mock-data/weather-info.json').then(() => {
			const data = {
				"city":"北京",
				"cityid":"101010100",
				"temp1":"-2℃",
				"temp2":"16℃",
				"weather":"晴",
				"img1":"http://www.weather.com.cn/data/cityinfo/n0.gif",
				"img2":"http://www.weather.com.cn/data/cityinfo/d0.gif",
				"ptime":"18:00"
			};
			setTimeout(() => {
				this.props.weatherGetSuccess(data);
			}, 5000);
		}).catch((error) => {
			this.props.weatherGetFailed(error);
		});*/

		this.props.startToGet('00001');
	};

	componentDidMount(){
		//this.fetchWeather();
	}

	render(){
		const {data} = this.props;

		return (
			<div>
				<button onClick={this.fetchWeather}>get the data</button>
				<div>
					City: {data.city}<br/>
					Weather: {data.weather}<br/>
				</div>
			</div>
		)
	};
};

const mapSate = (state, ownProps) => {
	const props = {...ownProps};
	props.data = state.testAsync.data;

	return props;
};
const mapDispatcher = (dispatcher, ownProps) => {
	//console.info(dispatcher, ownProps);
	const props = {...ownProps};

	props.startToGet = (cityId) => {
		dispatcher(actions.getTest(cityId));
	};

	return props;
};

export default connect(mapSate, mapDispatcher)(TestAsyncRedux);