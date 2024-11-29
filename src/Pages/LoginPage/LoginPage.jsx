import React from 'react';
import "./LoginPage.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function LoginPage() {

  const baseURL = import.meta.env.VITE_API_URL;
  const nav = useNavigate();
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get(`${baseURL}/users`);
      console.log(response.data);
      setUsers(response.data);

    } catch(error) {
      console.error("Error retrieving users data", error);
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const inputName = event.target.name.value;
    const inputPass = event.target.password.value;

    if(!inputName) {
      alert("Please be sure to fill in your username OR email");
      return
    }
    if(!inputPass) {
      alert("Please be sure to fill in your password");
      return
    }

  

    for (let i = 0; i < users.length; i++) {
      if( (users[i].user_username || users[i].user_email) === inputName  && users[i].user_pass === inputPass ) {
        nav("/:username");
        return;
      } else {
        alert("Sorry, it appears your email OR password is incorrect");
        // event.target.reset();
        return;
      }
    } 
  };


    const handleNewClick = (event) => {
        nav("/new-user");
    }

    useEffect(() => {
      getUsers();
    }, []);

  return (
    <main className="login">
        <h1 className="login__title">Login</h1>

        <div className="login__img"></div>

        <form className="form" action="submit" onSubmit={ handleLoginSubmit }>
            <label htmlFor="name" className="form__label">Username OR Email</label>
            <input type="text" className="form__input" name="name"/>

            <label htmlFor="password" className="form__label">Password</label>
            <input type="text" className="form__input" name="password"/>

            <button className="form__button">Login</button>
        </form>

        <section className="new-user">
        <p className="new-user__text">New User?</p>
        <button className="new-user__button" onClick={handleNewClick}>Create account</button>
        </section>

    </main>
  )
}

export default LoginPage