import React,{Component, PropTypes} from 'react';

class WeatherInfo extends Component{

	render(){
		const {city, cityId, temp1, temp2, weather, img1, img2, ptime} = this.props.weather;

		return (
			<dl>
				<dt>BeiJing Weather is:</dt>
				<dd>city: {city}</dd>
				<dd>Low Temp: {temp1}</dd>
				<dd>High Temp: {temp2}</dd>
				<dd>Weather: {weather}</dd>
				<dd>img1: {img1}</dd>
				<dd>img2: {img2}</dd>
				<dd>Update Time: {ptime}</dd>
			</dl>
		)
	};
};

WeatherInfo.defaultProps = {
	weather: {}
};
WeatherInfo.PropTypes = {
	weather: PropTypes.object.isRequired
};

export default WeatherInfo;