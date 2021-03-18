import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import NavBar from "../Layouts/navbar";
export const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    activateUsers();
  }, []);

  const activateUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    setUser(res.data.reverse());
  };
  const deleteUser= async id =>{
      await axios.delete(`http://localhost:3003/users/${id}`);
      activateUsers();
  }
  return (
      <React.Fragment>
          <NavBar btnText="Add User" link="/users/add"/>

          <div className="container">
      <h2 className="text-center m-4">Users-List Page</h2>
      <table className="table table-striped">
        <thead className='thead-dark'>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">User Email</th>
            <th scope="col">User Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         {
             users.map((user)=>( 
                 <tr key={user.id}>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.phone}</td>
                     <td>
                        <Link className='btn btn-outline-primary mr-4' to={`/users/edit/${user.id}`}>Edit</Link>                      
                        <button className='btn btn-danger' onClick={()=> deleteUser(user.id)} >Delete</button>
                     </td>
                 </tr>
             ))
         }
        </tbody>
      </table>
    </div>
      </React.Fragment>
  );
};

export default UserList;
