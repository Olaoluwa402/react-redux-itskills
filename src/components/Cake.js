import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { BuyCakeAction } from '../redux/actions/cakeActions'

const Cake = () => {
    const [qty,setQty] = useState('')
    const dispatch = useDispatch();
    const store = useSelector((state)=> state.buyCakes)
    const {numOfCakes} = store;
    console.log(store)

    const buyCakeHandler = () => {
        if(!qty) {
            alert('pls provide quantity')
            return
        }
            dispatch(BuyCakeAction(parseInt(qty)))
    }
  return (
    <div>
        <h3>Number of Cakes {numOfCakes}</h3>
        <input type='text' placeholder='type quantity' onChange={(e)=> setQty(e.target.value)}/>
        <button onClick={buyCakeHandler}>Buy Cake</button>
    </div>
  )
}

export default Cake