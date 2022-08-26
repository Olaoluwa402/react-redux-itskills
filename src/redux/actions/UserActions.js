import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../constants/UserConstants.js'
import axios from 'axios';

const getUsersRequest = () => {
    return {
        type:GET_USERS_REQUEST
    }
} 

const getUsersSuccess = (data) => {
    return {
        type:GET_USERS_SUCCESS,
        payload: data
    }
}

const getUsersFailure = (errorMsg) => {
    return {
        type:GET_USERS_FAILURE,
        payload: errorMsg
    }
}

export const fetchUsers = ()=> {
    console.log('hit here')
    const url = 'https://jsonplaceholder.typicode.com/users'
    return async(dispatch)=>{

             dispatch(getUsersRequest())
       try{
        setTimeout(()=> {
            console.log('delay')
        }, 10000)

        const {data} = await axios.get(url)
           
            dispatch(getUsersSuccess(data))
       }catch(err){
          dispatch(getUsersFailure(err.message))
       }
    }
}

// const fetchUserss = ()=> async(dispatch,getStore)=> {
       
// }