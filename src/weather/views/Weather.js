import React,{Component} from 'react';
import {connect} from 'react-redux';
import WeatherInfo from './WeatherInfo';
import * as actions from '../actions';

class Weather extends Component{

	fetchWeather = () => {
		this.props.weatherGetStart('101010100');

		//fetch('http://www.weather.com.cn/data/cityinfo/' + action.cityId + '.html').then((data) => {
		fetch('/mock-data/weather-info.json').then(() => {
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
		});
	};

	componentDidMount(){
		this.fetchWeather();
	}

	render(){
		const {weather} = this.props;

		return (
			<div>
				<p style={{display: weather.isFettching ? 'block' : 'none'}}>loading weather data ...</p>
				<WeatherInfo weather={ weather.data} />
			</div>
		)
	};
};

const mapSate = (state, ownProps) => {
	const props = {...ownProps};
	props.weather = state.weather;

	return props;
};
const mapDispatcher = (dispatcher, ownProps) => {
	//console.info(dispatcher, ownProps);
	const props = {...ownProps};

	props.weatherGetStart = (cityId) => {
		dispatcher(actions.weatherGetStart(cityId));
	};
	props.weatherGetFailed = (error) => {
		dispatcher(actions.weatherGetFailed(error));
	};
	props.weatherGetSuccess = (data) => {
		dispatcher(actions.weatherGetSuccess(data));
	};
	props.changeCity = (cityId) => {
		dispatcher(actions.changeCity(cityId));
	};

	return props;
};

export default connect(mapSate, mapDispatcher)(Weather);