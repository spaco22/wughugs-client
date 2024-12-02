import React from "react";
import "./HomePage.scss";

function HomePage() {
  return (
    <main className="homepage">
      <h1 className="homepage__title">Welcome!</h1>

      <div className="cards">
        <section className="card">
          <h2 className="card__title">Make Friends</h2>
        </section>

        <section className="card">
          <h2 className="card__title">Share Knowledge</h2>
        </section>

        <section className="card">
          <h2 className="card__title">Prepare to Experiment</h2>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
