import { combineReducers } from "redux";
import { BuyCakeReducer } from "./buyCakeReducer";
import { BuyIceCreamReducer } from "./buyIceCreamReducer";
import { getUsersReducer } from "./UserReducer";

const rootReducer = combineReducers({
    buyCakes:BuyCakeReducer,
    buyIceCream:BuyIceCreamReducer,
    getUsers:getUsersReducer 
})

export default rootReducer