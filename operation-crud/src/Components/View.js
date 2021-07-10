import React, {useState, useEffect}from 'react'
import {Link , useParams, useparams} from 'react-router-dom';
import axios from 'axios'

function View() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",

    })
 const {id} = useParams();
 useEffect(()=>
{
    loadUser();
} ,[ ])
 const loadUser = async e =>{
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setUser(result.data);
}
    return (
        <div className="conatiner py-4">
            <Link className= "btn btn-primary" to ='/'>Back to Home</Link>
            <h2>User id: {id}</h2>
         
            <ul className ="list-group-item w-90">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">UserName: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>
            </ul>
            
        </div>
    )
}

export default View
