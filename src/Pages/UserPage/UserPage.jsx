import React from 'react';
import "./UserPage.scss";

function UserPage() {
  return (
    <main className="user-page">
        <h1 className="user-page__title">Welcome back!</h1>

        <section className="user">
        <div className="user__img"></div>

        <article className="user__text">
        <h3 className="user__name">Sofia</h3>
        <p className="user__location">Hornby Island</p>
        </article>
        </section>

        <div className="wugs">
        <h2 className="wugs__title">Wugs</h2>
        <section className="wugs__gallery">
        <article className="wug">
            <div className="wug__img"></div>
            <h4 className="wug__name">Charlotte</h4>
            <p className="wug__species">pider</p>
        </article>

        <article className="wug">
            <div className="wug__img"></div>
            <h4 className="wug__name">Charlie</h4>
            <p className="wug__species">pider</p>
        </article>

        <article className="wug">
            <div className="wug__img"></div>
            <h4 className="wug__name">Mealwormies</h4>
            <p className="wug__species">meal worms</p>
        </article>
        </section>
        </div>

        <button className="user__button-wug">Add Wug</button>
    </main>
  )
}

export default UserPage