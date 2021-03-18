import axios from "axios";
import React, { useState,useEffect } from "react";
import {useHistory,useParams} from 'react-router-dom';
import NavBar from "../Layouts/navbar";
export const EditUser = () => {
    let history = useHistory();
    const {email:val}=useParams();
  const [users, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    area: "",
  });
  const {name,email,phone,city,state,country,area}=users
  const onInputChange =async e =>{
      //console.log(e.target.value);
      setUser({...users,[e.target.name]:e.target.value});
      if (e.target.name === "email") {
        const allUsers = await axios.get("http://localhost:3003/users");
        for (let x in allUsers.data) {
          if (allUsers.data[x].email === e.target.value && allUsers.data[x].id !== users.id)
          {
              alert("Email Already Exists, enter another one");
              setUser({ ...users, [e.target.name]: "" })
              break;
          }
        }
      }
  };
  const onSubmit = async e =>{
      e.preventDefault();
    await axios.put(`http://localhost:3003/users/${val}`,users);
    history.push("/");
  };
  useEffect(() => {
    const activateUsers = async()=>{
        const res = await axios.get(`http://localhost:3003/users/${val}`);
        console.log(res.data);
        setUser(res.data);
    }
    activateUsers();
  },[val]);

  return (
      <React.Fragment>
          <NavBar btnText="Back" link="/"/>
          <div className="container">
      <div className="w-90  mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit an User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City"
              name="city"
              value={city}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your State"
              name="state"
              value={state}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Country"
              name="country"
              value={country}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Area"
              name="area"
              value={area}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button disabled={email.length>0?false:true} className="btn btn-primary btn-block">Edit and Submit</button>
        </form>
      </div>
    </div>
      </React.Fragment>
  );
};
export default EditUser;
