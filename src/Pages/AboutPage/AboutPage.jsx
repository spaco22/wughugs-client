import React from "react";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <main className="about">
      <h1 className="about__title">Learn a little about us!</h1>

      <h2 className="about__subtitle">Mission:</h2>
      <p className="about__text">Connect wug friends with more friends!</p>
      <h2 className="about__subtitle">Vision:</h2>
      <p className="about__text">Create a platform to share resources, knowledge, and regulations for creating a wug home.</p>
      <h2 className="about__subtitle">Values:</h2>
      <ul className="about__values">
        <li className="value">No question is too silly to ask!</li>
        <li className="value">Be respectful</li>
        <li className="value">Have fun!</li>
      </ul>
    </main>
  );
}

export default AboutPage;
