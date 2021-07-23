import React from 'react';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { useHistory , useParams } from 'react-router-dom';
const EditFaq = () => {
    let history = useHistory();
    const {id} =useParams();

    const [user, setUser] = useState({
        name: "",
        

    })

    const { name } = user;

    const onInputChange = e => {

        setUser({ ...user, [e.target.name]: e.target.value });
    }
   
  useEffect(()=>{
      loadUser();
  },[])

  const loadUser = async () =>{
      const result = await axios.get(`http://localhost:3003/users/${id}`);
      console.log(result);
      setUser(result.data);
  }
    const onSubmit = async e => {
        console.log(user);
        e.preventDefault();
        var apiRes = await axios.put(`http://localhost:3003/users/${id}` ,user);
        console.log(apiRes)
        history.push("/test")

    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center">edit question</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="mb-3">
                        <input type="text" placeholder="Enter your name" class="form-control" name="name" value={name} onChange={e => { onInputChange(e) }} />
                    </div>
                   
                    <button type="submit" class="btn btn-warning">Update question</button>
                </form>
            </div>


        </div>
    )
}

export default EditFaq
