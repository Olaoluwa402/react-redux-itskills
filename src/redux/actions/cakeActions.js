import { BUY_CAKE } from "../constants/CakeConstants"
export const BuyCakeAction = (qty) => {
    return {
        type:BUY_CAKE,
        payload:qty
    }
}