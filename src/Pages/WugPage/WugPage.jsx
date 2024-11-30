import React from 'react';
import "./WugPage.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function WugPage() {
  const { wugId } = useParams();
  const baseURL = import.meta.env.VITE_API_URL;

  // const [wugs, setWugs] = useState([]);
  const [wug, setWug] = useState({});

  // async function getWugs() {
  //   try {
  //     const response = await axios.get(`${baseURL}/wugs`);
  //     // console.log(response.data);
  //     setWugs(response.data);
  //   } catch (error) {
  //     console.error("Error retrieving users data", error);
  //   }
  // }

  async function getWugById(wugId) {
    try {
      const response = await axios.get(`${baseURL}/wugs/${wugId}`);
      // console.log(response.data);
      setWug(response.data);
    } catch (error) {
      console.error("Error retrieving users data", error);
    }
  }

  // console.log("This is my wug:", wug);

  useEffect(() => {
    // getWugs();
    getWugById(wugId);
  }, [])



  return (
    <main className="wug-page">

      <section className="wug__details">
      <article className="wug">
        <div className="wug__img"></div>
        <div className="wug__text">
        <h3 className="wug__name">{ wug.wug_name }</h3>
        <p className="wug__species">{ wug.wug_species }</p>
        <p className="wug__age"> { wug.wug_age } </p>
        <p className="wug__type">Wug</p>
        <p className="wug__common-names">{ wug.wug_common_names }</p>
        </div>
      </article>

      <article className="wug-user">
        <div className="wug-user__img"></div>
        <h4 className="wug-user__name">{ wug.user_username }</h4>
        <p className="wug-user__location">{ wug.user_province }</p>

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