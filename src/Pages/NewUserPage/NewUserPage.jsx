import React from "react";
import "./NewUserPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewUserPage() {
  const baseURL = import.meta.env.VITE_API_URL;

  const nav = useNavigate();

  async function addUser(newUser) {
    try {
      const response = await axios.post(`${baseURL}/users`, newUser, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        alert(
          "You're account has been created! \n You will now be re-directed your user page"
        );
        const username = response.data.newUser.user_username;
        nav(`/${username}`);
      }
    } catch (error) {
      console.error("Error adding new user", error);
    }
  }

  const handleAddUserSubmit = (event) => {
    event.preventDefault();

    const newImg = event.target.img.value;
    const newUsername = event.target.username.value;
    const newEmail = event.target.email.value;
    const newPass = event.target.pass.value;
    const newConfirmPass = event.target.confirmPass.value;

    if (!newUsername) {
      alert("Please provide a username");
      return;
    }

    if (!newEmail) {
      alert("Please provide an email address");
      return;
    }

    if (!newPass) {
      alert("Please provide a password");
      return;
    }

    if (!newConfirmPass) {
      alert("Please confirm you password");
      return;
    }

    if (newPass !== newConfirmPass) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = new FormData();
    newUser.append("user_img", newImg);
    newUser.append("user_firstname", "");
    newUser.append("user_lastname", "");
    newUser.append("user_username", newUsername);
    newUser.append("user_city", "");
    newUser.append("user_province", "");
    newUser.append("user_email", newEmail);
    newUser.append("user_pass", newPass);
    newUser.append("user_pass_confirm", newConfirmPass);

    addUser(newUser);
  };

  const handleLoginClick = (event) => {
    nav("/login");
  };

  return (
    <main className="new-user">
      <h1 className="new-user__title">Create Account</h1>

      <div className="new-user__img"></div>

      <form
        className="form"
        action="submit"
        onSubmit={handleAddUserSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="img" className="form__label">
          Upload Image
        </label>
        <input type="file" className="form__img" name="img" />

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
