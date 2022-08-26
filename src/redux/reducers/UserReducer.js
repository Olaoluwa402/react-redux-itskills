import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USERS_RESET
  } from '../constants/UserConstants.js'

  const initialState = {
     loading:false,
     users:[],
     success:false,
     error:'' 
  }
  const getUsersReducer = (state=initialState, action)=> {
            switch(action.type){
                case GET_USERS_REQUEST :
                    return {...state,loading:true}
                case GET_USERS_SUCCESS:
                    return {loading:false,success:true,users:action.payload}
                case GET_USERS_FAILURE:
                    return {loading:false, error:action.payload}
                case GET_USERS_RESET:
                    return {}
                default :
                 return state
            }
  }

  export {getUsersReducer}