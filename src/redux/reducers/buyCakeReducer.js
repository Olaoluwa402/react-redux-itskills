import { BUY_CAKE } from "../constants/CakeConstants"

const initialState = {
    numOfCakes : 20,
}
export const BuyCakeReducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE :
            return {
                ...state,
                numOfCakes:state.numOfCakes - action.payload
            }

        default:
            return state
    }
}