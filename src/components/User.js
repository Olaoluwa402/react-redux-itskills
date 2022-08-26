import React,{useEffect} from 'react'
import { fetchUsers } from '../redux/actions/UserActions'
import { useDispatch, useSelector } from 'react-redux'


const User = () => {
    const dispatch = useDispatch();

    const {loading, error, users} = useSelector((state)=> state.getUsers)
    
    useEffect(()=> {
    ///dispatch get users Action
     dispatch(fetchUsers())
    }, [dispatch])

  return loading ? (
  <h2>Loading ...</h2>
  ) : error ? (
  <p style={{backgroundColor:'red', color:'white'}}>{error}</p>
  ) : users ? (
  <div>
        {users.map((user)=> (<h4 key={user.id}>{user.name}</h4>))}
  </div>
  ) : null
}

export default User