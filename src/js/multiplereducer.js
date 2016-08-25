import { combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {
	switch(action.type) {
		case "CHANGE_NAME": {
			state = { ...state, name:action.payload}
			break;
		}
		case "CHANGE_AGE": {
			state = { ...state, age:action.payload}
			break;
		}

	}
	return state;
}

const tweetsReduer = (state=[], action) => {
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReduer,
})

//  passing default values or we can intialize default value in reducer function itself
// const store = createStore(reducers, {
// 	user: {
// 		name: 'Kate',
// 		age: 25,
// 	},
// 	tweets: []
// });

const store = createStore(reducers);


store.subscribe(() => {
	console.log("Store Changed", store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload: "Krish"});
store.dispatch({type:"CHANGE_AGE", payload: 35});
store.dispatch({type:"CHANGE_AGE", payload: 10});
store.dispatch({type:"CHANGE_NAME", payload: "ASHU"});
store.dispatch({type:"CHANGE_AGE", payload: 26});
store.dispatch({type:"DEC", payload: 20});
store.dispatch({type:"DEC", payload: 10});
