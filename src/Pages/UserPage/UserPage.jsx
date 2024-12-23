import React from "react";
import "./UserPage.scss";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserPage() {
  const { username } = useParams();
  const nav = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL;

  let userId;

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [wugs, setWugs] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get(`${baseURL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error retrieving users data", error);
    }
  }

  for (let i = 0; i < users.length; i++) {
    if (username === users[i].user_username) {
      userId = users[i].user_id;
      break;
    }
  }

  async function getUser(userId) {
    if (!userId) {
      return;
    }

    try {
      const response = await axios.get(`${baseURL}/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error(`Unable to get data for user with id ${userId}`, error);
    }
  }

  async function getUserWugs(userId) {
    if (!userId) {
      return;
    }

    try {
      const response = await axios.get(`${baseURL}/users/${userId}/wugs`);
      setWugs(response.data);
    } catch (error) {
      console.error(`Unable to get wugs for user with id ${userId}`, error);
    }
  }

  function handleAddClick(event) {
    nav(`/${username}/add-wug`);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUser(userId);
    getUserWugs(userId);
  }, [userId]);

  return (
    <main className="user-page">
      <h1 className="user-page__title">Welcome back, {user.user_firstname}!</h1>

      <section className="user">
        <div className="user__img"></div>

        <article className="user__text">
          <h3 className="user__name">
            {user.user_firstname} {user.user_lastname}{" "}
          </h3>
          <p className="user__location">
            {user.user_city}, {user.user_province}
          </p>
        </article>
      </section>

      <div className="user-wugs">
        <h2 className="user-wugs__title">Wugs</h2>
        <section className="user-wugs__gallery">
          {wugs.length === 0 ? (
            <p className="user-wugs__loading"> Loading wugs ... </p>
          ) : (
            wugs.map((wug) => (
              <Link
                className="user-wug"
                key={wug.wug_id}
                to={`/wugs/${wug.wug_id}`}
              >
                <div className="user-wug__img"></div>
                <h4 className="user-wug__name">{wug.wug_name}</h4>
                <p className="user-wug__species"> {wug.wug_species} </p>
              </Link>
            ))
          )}
        </section>
      </div>

      <div className="user-buttons">
        <button className="user-button__wug" onClick={handleAddClick}>
          Add Wug
        </button>
      </div>
    </main>
  );
}

export default UserPage;
