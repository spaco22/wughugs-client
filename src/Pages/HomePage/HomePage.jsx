import React from "react";
import "./HomePage.scss";
import Friends from "../../assets/images/make-friends.png";
import Knowledge from "../../assets/images/share-knowledge.png";
import Experiment from "../../assets/images/prepare-to-experiment.png";

function HomePage() {
  return (
    <main className="homepage">
      <h1 className="homepage__title">Welcome!</h1>

      <div className="cards">
      <section className="card">
        <h2 className="card__title">Make Friends</h2>
        {/* <div className="card__img"></div> */}
        <img src={ Friends } alt="" className="card__img-f" />
      </section>

      <section className="card card--k">
        <h2 className="card__title">Share Knowledge</h2>
        <img src={ Knowledge } alt="" className="card__img-k" />
      </section>

      <section className="card">
        <h2 className="card__title">Prepare to Experiment</h2>
        <img src={ Experiment } alt="" className="card__img-e" />
      </section>
      </div>
    </main>
  );
}

export default HomePage;
