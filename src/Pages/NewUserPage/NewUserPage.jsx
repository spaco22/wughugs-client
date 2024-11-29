import React from 'react';
import "./NewUserPage.scss";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function NewUserPage() {

    const nav = useNavigate();

    const [users, setUsers] = useState([]);

  
    async function getUsers() {
      try {
        const response = await axios.get(`${baseURL}/users`);
        // console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error retrieving users data", error);
      }
    }

    const handleLoginClick = (event) => {
        nav("/login");
    }

    useEffect(() => {
      getUsers();
    }, []);

  return (
    <main className="new-user">
        <h1 className="new-user__title">Create Account</h1>

        <div className="new-user__img"></div>

        <form className="form" action="submit">
            <label htmlFor="name" className="form__label">Username</label>
            <input type="text" className="form__input" name="name"/>

            <label htmlFor="email" className="form__label">Email</label>
            <input type="text" className="form__input" name="email" />

            <label htmlFor="password" className="form__label">Password</label>
            <input type="text" className="form__input" name="password"/>

            <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
            <input type="text" className="form__input" name="confirmPassword"/>

            <button className="form__button">Create Account</button>
        </form>

        <section className="new-user">
        <p className="new-user__text">Already have an acount?</p>
        <button className="new-user__button" onClick={handleLoginClick}>Login</button>
        </section>

    </main>
  )
}

export default NewUserPage