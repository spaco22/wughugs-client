import React from "react";
import "./NewUserPage.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function NewUserPage() {
  const baseURL = import.meta.env.VITE_API_URL;

  const nav = useNavigate();

  async function addUser(newUser) {
    try {
      const response = await axios.post(`${baseURL}/users`, newUser);
      // console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error adding new user", error);
    }
  }

  const handleAddUserSubmit = (event) => {
    event.preventDefault();

    const newUsername = event.target.username.value;
    const newEmail = event.target.email.value;
    const newPass = event.target.pass.value;
    const newConfirmPass = event.target.confirmPass.value;

    // if ( !newUsername || !newEmail || ! newPass || !newConfirmPass) {
    //   alert("Please ensure all fields are filled!");
    //   return;
    // }

    if (!newUsername) {
      alert("Please provide a username");
    }

    if (!newEmail) {
      alert("Please provide an email address");
    }

    if (!newPass) {
      alert("Please provide a password");
    }

    if (!newConfirmPass) {
      alert("Please confirm you password");
    }

    if (newPass !== newConfirmPass) {
      alert("Passwords do not match!");
    }

    const newUser = {
      user_firstname: "",
      user_lastname: "",
      user_username: newUsername,
      user_city: "",
      user_province: "",
      user_email: newEmail,
      user_pass: newPass,
      user_pass_confirm: newConfirmPass,
      user_img: "",
    };
  };

  const handleLoginClick = (event) => {
    nav("/login");
  };

  useEffect(() => {}, []);

  return (
    <main className="new-user">
      <h1 className="new-user__title">Create Account</h1>

      <div className="new-user__img"></div>

      <form className="form" action="submit" onSubmit={handleAddUserSubmit}>

      <label htmlFor="firstName" className="form__label">
          First Name
        </label>
        <input type="text" className="form__input" name="firstName" />

        <label htmlFor="lastName" className="form__label">
          Last Name
        </label>
        <input type="text" className="form__input" name="lastName" />


        <label htmlFor="username" className="form__label">
          Username
        </label>
        <input type="text" className="form__input" name="username" />

        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input type="text" className="form__input" name="email" />
        
        <label htmlFor="city" className="form__label">
          City
        </label>
        <input type="text" className="form__input" name="city" />

        <label htmlFor="Province" className="form__label">
          Province
        </label>
        <input type="text" className="form__input" name="province" />

        <label htmlFor="pass" className="form__label">
          Password
        </label>
        <input type="text" className="form__input" name="pass" />

        <label htmlFor="confirmPass" className="form__label">
          Confirm Password
        </label>
        <input type="text" className="form__input" name="confirmPass" />

        <button className="form__button-create">Create Account</button>
        <button className="form__button-cancel">Cancel</button>
      </form>

      <section className="new-user">
        <p className="new-user__text">Already have an acount?</p>
        <button className="new-user__button" onClick={handleLoginClick}>
          Login
        </button>
      </section>
    </main>
  );
}

export default NewUserPage;
