import React, { useState, useEffect, Component,  } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();

    }, [])

    const loadUsers = async () => {
        const Result = await axios.get("http://localhost:3003/users");
        console.log("Result", Result);
        setUser(Result.data.reverse());
    }
    const deleteUSer = async id =>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();

    }
    return (
        <div>
            <h2>Home Component</h2>
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index) => (
                            <tr>
                                <th >{index+1}</th>
                                <td >{user.name}</td>
                                <td >{user.username}</td>
                                <td >{user.email}</td>
                                <td >
                                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger"onClick= {()=>deleteUSer(user.id)} >Delete</Link>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    )

}

export default Home;