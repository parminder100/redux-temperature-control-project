import {createStore} from "redux";

const TemperatureReducer = (state={counter:10}, action) =>{
    if(action.type === "increment"){
        return{
            counter: state.counter + 1,
        }
    }
    if(action.type === "decrement"){
        return{
            counter: state.counter - 1,
        }
    }
    return state;
}

const Store = createStore(TemperatureReducer);
export default Store;