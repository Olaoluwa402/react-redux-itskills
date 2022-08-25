import { combineReducers } from "redux";
import { BuyCakeReducer } from "./buyCakeReducer";
import { BuyIceCreamReducer } from "./buyIceCreamReducer";

const rootReducer = combineReducers({
    buyCakes:BuyCakeReducer,
    buyIceCream:BuyIceCreamReducer
})

export default rootReducer