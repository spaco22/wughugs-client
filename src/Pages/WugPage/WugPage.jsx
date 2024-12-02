import React from 'react';
import "./WugPage.scss";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function WugPage() {
  const { wugId } = useParams();
  const baseURL = import.meta.env.VITE_API_URL;
  const nav = useNavigate();

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
      console.log(response.data);
      setWug(response.data);
    } catch (error) {
      console.error(`Error retrieving wug with ID ${wugId}`, error);
    }
  }

  async function delWug(wugId) {
    try {
      const response = await axios.delete(`${baseURL}/wugs/${wugId}`);
      // console.log(response.data);
      setWug(response.data);
    } catch (error) {
      console.error(`Error deleting wug with ID ${wugId}`, error);
    }
  }

  function handleEditClick(event) {
    nav(`/wugs/${wugId}/edit`);
  }

  function handleDelClick(event) {
    confirm(`Click OK to delete ${wug.wug_name}`);
    if(confirm) {
      delWug(wugId);
      alert(`${wug.wug_name} successfully deleted! \n You will now be re-directed to your profile page`)
      nav(`/${wug.user_username}`);
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

      <Link className="wug-user" to={`/${wug.user_username}`}>
        <div className="wug-user__img"></div>
        <h4 className="wug-user__name">{ wug.user_username }</h4>
        <p className="wug-user__location">{ wug.user_province }</p>

      </Link>
      </section>

      <div className="wug-page__buttons">
        <button className="wug-page__delete" onClick={ handleDelClick } >Delete</button>
        <button className="wug-page__edit" onClick={ handleEditClick } >Edit</button>
      </div>
      

    </main>
  )
}

export default WugPage