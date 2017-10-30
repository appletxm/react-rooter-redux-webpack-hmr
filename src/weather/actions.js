import {WEATHER_GET_START, WEATHER_GET_FAILED, WEATHER_GET_SUCESS, CHANGE_CITY} from './actionTypes';

export const weatherGetStart = (cityId) => {
	return {
		type: WEATHER_GET_START,
		cityId: cityId
	};
};

export const weatherGetFailed = (error) => {
	return {
		type: WEATHER_GET_FAILED,
		error: error
	};
};

export const weatherGetSuccess = (weather) => {
	return {
		type: WEATHER_GET_SUCESS,
		weather: weather
	};
};

export const changeCity = (cityId) => ({
	type: CHANGE_CITY,
	cityId: cityId
});