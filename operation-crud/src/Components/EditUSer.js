import React from 'react';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { useHistory , useParams } from 'react-router-dom';
const EditUsers = () => {
    let history = useHistory();
    const {id} =useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",

    })

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {

        setUser({ ...user, [e.target.name]: e.target.value });
    }
   
  useEffect(()=>{
      loadUser();
  },[])

  const loadUser = async e =>{
      const result = await axios.get(`http://localhost:3003/users/${id}`);
      console.log(result);
      setUser(result.data);
  }
    const onSubmit = async e => {
        console.log(user);
        e.preventDefault();
        var apiRes = await axios.put(`http://localhost:3003/users/${id}` ,user);
        console.log(apiRes)
        history.push("/")

    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center">Add Users</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="mb-3">
                        <input type="text" placeholder="Enter your name" class="form-control" name="name" value={name} onChange={e => { onInputChange(e) }} />
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="Enter your username" class="form-control" name="username" value={username} onChange={e => { onInputChange(e) }} />
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="Enter your email" class="form-control" name="email" value={email} onChange={e => { onInputChange(e) }} />
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="Enter your phone number" class="form-control" name="phone" value={phone} onChange={e => { onInputChange(e) }} />
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="Enter your website name" class="form-control" name="website" value={website} onChange={e => { onInputChange(e) }} />
                    </div>
                    <button type="submit" class="btn btn-warning">Update User</button>
                </form>
            </div>


        </div>
    )
}

export default EditUsers
