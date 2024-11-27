import React from "react";
import "./HomePage.scss";

function HomePage() {
  return (
    <main className="homepage">
      <h1>HomePage</h1>

      <section className="card">
        <h2 className="card__title">Make Friends</h2>
      </section>

      <section className="card">
        <h2 className="card__title">Share Knowledge</h2>
      </section>

      <section className="card">
        <h2 className="card__title">Prepare to Experiment</h2>
      </section>
    </main>
  );
}

export default HomePage;
