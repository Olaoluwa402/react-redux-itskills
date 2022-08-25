import { BUY_ICECREAM } from "../constants/IceCreammConstants";

const initialState = {
    numOfIceCream:50
}
export const BuyIceCreamReducer = (state=initialState, action)=> {
        switch(action.type){
            case BUY_ICECREAM :
                return {
                    ...state,
                    numOfIceCream:state.numOfIceCream - action.payload
                }
           default:
            return state
        }
}