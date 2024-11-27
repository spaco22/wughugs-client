import React from 'react';
import "./WugPage.scss";

function WugPage() {
  return (
    <main className="wug">

      <section className="wug__details">
      <article className="wug">
        <div className="wug__img"></div>
        <h3 className="wug__name">Chalotte</h3>
        <p className="wug__species">Tarantula</p>
        <p className="wug__age"> approx. 1 year 2 months</p>
        <p className="wug__type">Wug</p>
        <p className="wug__common-names">Tarantula, ...</p>
      </article>

      <article className="user">
        <div className="user__img"></div>
        <h4 className="user__name">Sofia</h4>
        <p className="user__location">Hornby Island</p>

      </article>
      </section>
      

    </main>
  )
}

export default WugPage