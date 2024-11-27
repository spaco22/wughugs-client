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

        <div className="user-wugs">
        <h2 className="user-wugs__title">Wugs</h2>
        <section className="user-wugs__gallery">
        <article className="user-wug">
            <div className="user-wug__img"></div>
            <h4 className="user-wug__name">Charlotte</h4>
            <p className="wug__species">tarantula</p>
        </article>

        <article className="user-wug">
            <div className="user-wug__img"></div>
            <h4 className="user-wug__name">Charlie</h4>
            <p className="wug__species">tarantula</p>
        </article>

        <article className="user-wug">
            <div className="user-wug__img"></div>
            <h4 className="user-wug__name">Mealwormies</h4>
            <p className="user-wug__species">meal worms</p>
        </article>
        </section>
        </div>

        <div className="user-buttons">
        <button className="user-button__wug">Add Wug</button>
        </div>
    </main>
  )
}

export default UserPage