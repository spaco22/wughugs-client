import React from "react";
import "./NewUserPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewUserPage() {
  const baseURL = import.meta.env.VITE_API_URL;

  const nav = useNavigate();

  async function addUser(newUser) {
    try {
      const response = await axios.post(`${baseURL}/users`, newUser);
      if (response) {
        alert(
          "You're account has been created! \n You will now be re-directed to the login page"
        );
        nav("/login");
      }
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

    addUser(newUser);
  };

  const handleLoginClick = (event) => {
    nav("/login");
  };

  return (
    <main className="new-user">
      <h1 className="new-user__title">Create Account</h1>

      <div className="new-user__img"></div>

      <form className="form" action="submit" onSubmit={handleAddUserSubmit}>
        <label htmlFor="username" className="form__label">
          Username
        </label>
        <input type="text" className="form__input" name="username" />

        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input type="text" className="form__input" name="email" />

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
