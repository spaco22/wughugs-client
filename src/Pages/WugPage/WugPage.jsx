import React from 'react';
import "./WugPage.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function WugPage() {
  const { wudId } = useParams();
  const baseURL = import.meta.env.VITE_API_URL;

  const [wugs, setWugs] = useState([]);
  const [wug, setWug] = useState({});

  

  useEffect(() => {

  }, [])



  return (
    <main className="wug-page">

      <section className="wug__details">
      <article className="wug">
        <div className="wug__img"></div>
        <div className="wug__text">
        <h3 className="wug__name">Chalotte</h3>
        <p className="wug__species">Tarantula</p>
        <p className="wug__age"> approx. 1 year 2 months</p>
        <p className="wug__type">Wug</p>
        <p className="wug__common-names">Tarantula, ...</p>
        </div>
      </article>

      <article className="wug-user">
        <div className="wug-user__img"></div>
        <h4 className="wug-user__name">Sofia</h4>
        <p className="wug-user__location">Hornby Island</p>

      </article>
      </section>

      <div className="wug-page__buttons">
        <button className="wug-page__delete">Delete</button>
        <button className="wug-page__edit">Edit</button>
      </div>
      

    </main>
  )
}

export default WugPage