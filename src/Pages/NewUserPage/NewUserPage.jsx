import React from 'react';
import "./NewUserPage.scss";
import { useNavigate } from 'react-router-dom';

function NewUserPage() {

    const nav = useNavigate();

    const handleLoginClick = (event) => {
        nav("/login");
    }

  return (
    <main className="new-user">
        <h1 className="new-user__title">Create Account</h1>

        <div className="new-user__img"></div>

        <form className="form" action="submit">
            <label htmlFor="name" className="form__label">Name</label>
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