import React from "react";
import "./UserPage.scss";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserPage() {
  const { username } = useParams();
  const nav = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL;
  // console.log(username);

  let userId;

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [wugs, setWugs] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get(`${baseURL}/users`);
      // console.log(response.data);
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
      // console.log(response.data);
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
      // console.log(response.data);
      setWugs(response.data);
    } catch (error) {
      console.error(`Unable to get wugs for user with id ${userId}`, error);
    }
  }

  function handleAddClick(event) {
    nav(`/${username}/add-wug`);
  }

  // console.log(user.user_img);
  // console.log(wugs);

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
        <div className="user__img-div">
          {user.user_img && (
            <img
              className="user__img"
              src={`${baseURL}/${user.user_img}`}
              alt=""
            />
          )}
        </div>

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
              // console.log("This is my wug:", wug);
              <Link
                className="user-wug"
                key={wug.wug_id}
                to={`/wugs/${wug.wug_id}`}
              >
                <div className="user-wug__img-div">
                  {wug.wug_img && (
                    <img
                      className="user-wug__img"
                      src={`${baseURL}/${wug.wug_img}`}
                      alt=""
                    />
                  )}
                </div>
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
