import { BUY_ICECREAM } from "../constants/IceCreammConstants";

export const BuyIceCreamAction = (qty)=>{
    return {
        type:BUY_ICECREAM,
        payload:qty
    }
}