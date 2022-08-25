import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {  BuyIceCreamAction} from '../redux/actions/IceCreamAction'

const IceCream = () => {
    const [qty,setQty] = useState('')
    const dispatch = useDispatch();
    const store = useSelector((state)=> state) 
    const {numOfCakes} = store;
    console.log(store)

    const buyIceCreamHandler = () => {
        if(!qty) {
            alert('pls provide quantity')
            return
        }
            dispatch( BuyIceCreamAction(parseInt(qty)))
    }
  return (
    <div>
        <h3>Number of Ice Creams {numOfCakes}</h3>
        <input type='text' placeholder='type quantity' onChange={(e)=> setQty(e.target.value)}/>
        <button onClick={buyIceCreamHandler }>Buy IceCream</button>
    </div>
  )
}

export default IceCream