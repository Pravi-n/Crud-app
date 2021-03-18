import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Layouts/navbar";
export const AddUser = () => {
  let history = useHistory();
  const [users, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    area: "",
  });
  const { name, email, phone, city, state, country, area } = users;
  const isEnabled =
    name.length > 0 &&
    email.length > 0 &&
    phone.length > 0 &&
    city.length > 0 &&
    state.length > 0 &&
    country.length > 0 &&
    area.length > 0;
  const onInputChange = async (e) => {
    // console.log(e.target.value);
    setUser({ ...users, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      const allUsers = await axios.get("http://localhost:3003/users");
      for (let x in allUsers.data) {
        if (allUsers.data[x].email === e.target.value)
        {
            alert("Email Already Exists, enter another one");
            setUser({ ...users, [e.target.name]: "" })
            break;
        }
      }
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", users);
    history.push("/");
  };
  return (
      <React.Fragment>
          <NavBar btnText="Back" link="/"/>
          <div className="container">
      <div className="w-90  mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add an User</h2>
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
              className="form-control form-control-lg error"
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
          <button disabled={!isEnabled} className="btn btn-primary btn-block">
            Add User
          </button>
        </form>
      </div>
    </div>
      </React.Fragment>
  );
};
export default AddUser;
