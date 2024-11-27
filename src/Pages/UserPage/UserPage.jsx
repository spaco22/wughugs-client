import React from 'react';
import "./UserPage.scss";

function UserPage() {
  return (
    <main className="user">
        <h1 className="user__title">Welcome back!</h1>

        <div className="user__img"></div>

        <h2 className="user__name">Sofia</h2>
        <h4 className="user__location">Hornby Island</h4>

        <section className="wugs">
        <article className="wug">
            <div className="wug__img"></div>
            <h3 className="wug__name">Charlotte</h3>
            <p className="wug__species">pider</p>
        </article>

        <article className="wug">
            <div className="wug__img"></div>
            <h3 className="wug__name">Charlie</h3>
            <p className="wug__species">pider</p>
        </article>

        <article className="wug">
            <div className="wug__img"></div>
            <h3 className="wug__name">Mealwormies</h3>
            <p className="wug__species">meal worms</p>
        </article>
        </section>

        <button className="user__button-wug">Add Wug</button>
    </main>
  )
}

export default UserPage