import React from 'react';
import "./UserPage.scss";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UserPage() {

  const { userId } = useParams();
  const baseURL = import.meta.env.VITE_API_URL;
  console.log(userId);

  const [user, setUser] = useState(null);

async function getUser(userId) {
  if(!userId) {
    return;
  }

  try {
      const response = await axios.get(`${baseURL}/users/${userId}`);
      console.log(response.data);
      setUser(response.data);
  
  } catch(error) {
    console.error(`Unable to get data for user with id ${userId}`, error);
  }
}

useEffect(()=> {
  getUser(userId);
}, [userId]);


  return (
    <main className="user-page">
        <h1 className="user-page__title">Welcome back!</h1>

        <section className="user">
        <div className="user__img"></div>

        <article className="user__text">
        <h3 className="user__name">{ user.user_name }</h3>
        <p className="user__location">{ user.user_location }</p>
        </article>
        </section>

        <div className="user-wugs">
        <h2 className="user-wugs__title">Wugs</h2>
        <section className="user-wugs__gallery">
        <article className="user-wug">
            <div className="user-wug__img"></div>
            <h4 className="user-wug__name">Charlotte</h4>
            <p className="wug__species">tarantula</p>
        </article>

        <article className="user-wug">
            <div className="user-wug__img"></div>
            <h4 className="user-wug__name">Charlie</h4>
            <p className="wug__species">tarantula</p>
        </article>

        <article className="user-wug">
            <div className="user-wug__img"></div>
            <h4 className="user-wug__name">Mealwormies</h4>
            <p className="user-wug__species">meal worms</p>
        </article>
        </section>
        </div>

        <div className="user-buttons">
        <button className="user-button__wug">Add Wug</button>
        </div>
    </main>
  )
}

export default UserPage