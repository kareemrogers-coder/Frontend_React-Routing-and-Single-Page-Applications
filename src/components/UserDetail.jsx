import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'

const UserDetail = () => {

    const {id} = useParams()
    const [user, setUser] = useState(null); 


    const getUserInfo = (id) => {
        axios.get(`https://fakestoreapi.com/users/${id}`)
        .then(response => {
          console.log(response)
          setSelectedUserInfo(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

      useEffect(()=>{
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/users/${id}`)
                console.log(response)
                setUser(response.data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchUser();

      },[])
  return (
    <div>
       
        {user ?(
            <>
            <h2> Username: {user.username}</h2>
            <p>{user.name.firstname} {user.name.lastname}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <Link to="/axios-users" >Back to user page</Link>

            </>
        ) : (
            <> <p> No User Found</p>
            <Link to="/axios-users" >Back to user page</Link>
            </>
            
        )}
       
    </div>
    
  )
}

export default UserDetail