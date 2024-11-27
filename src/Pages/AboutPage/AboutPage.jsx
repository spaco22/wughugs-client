import React from "react";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <main className="about">
      <h1 className="about__title">Learn a little about us!</h1>

      <section className="statements">
        <article className="statement">
          <h2 className="statement__title">Mission:</h2>
          <p className="statement__text">
            Connect wug friends with more friends
          </p>
        </article>

        <article className="statement">
          <h2 className="statement__title">Vision:</h2>
          <p className="statement__text">
            Create a platform to share resources, knowledge, and regulations for
            creating a wug home
          </p>
        </article>

        <article className="statement">
          <h2 className="statement__title">Values:</h2>
          <ul className="statement__values">
            <li className="statement__value">No question is too silly to ask</li>
            <li className="statement__value">Be respectful</li>
            <li className="statement__value">Have fun!</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default AboutPage;
