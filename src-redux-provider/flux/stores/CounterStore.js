import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../ActionTypes';

const counterValues = {
	'First': 0,
	'Second': 10,
	'Third': 30	
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
	getCounterValue: function(){
		return counterValues;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeChangeListener(CHANGE_EVENT, callback);
	}
});

CounterStore.dispatchToken = AppDispatcher.register( (action) = >{
	if(action.type === ActionTypes.INCREMENT){
		counterValues[action.counterCaption] ++;
		CounterStore.emitChange();
	}
});

export default CounterStore;