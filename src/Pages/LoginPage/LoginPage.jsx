import React from 'react';
import "./LoginPage.scss";

function LoginPage() {
  return (
    <main className="login">
        <h1 className="login__title">Login</h1>

        <div className="login__img"></div>

        <form className="form" action="submit">
            <label htmlFor="name" className="form__label">Name</label>
            <input type="text" className="form__input" name="name"/>

            <label htmlFor="email" className="form__label">Email</label>
            <input type="text" className="form__input" name="email" />

            <label htmlFor="password" className="form__label">Password</label>
            <input type="text" className="form__input" name="password"/>

            <button className="form__button">Login</button>
        </form>

        <section className="new-user">
        <p className="new-user__text">New User?</p>
        <button className="new-user__button">Create account</button>
        </section>

    </main>
  )
}

export default LoginPage