import React from "react";
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
  const [journals, setJournals] = useState([]);

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

  async function getWugJournals(wugId) {
    try {
      const response = await axios.get(`${baseURL}/wugs/${wugId}/journals`);
      // console.log(response.data);

      const data = response.data;

      const formattedJournals = data
        .map((journal) => ({
          ...journal,
          formattedDate: new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(new Date(journal.date_created)),
        }))
        .reverse();

      console.log(formattedJournals);
      setJournals(formattedJournals);
    } catch (error) {
      console.error(
        `Error retrieving journals for wug with ID ${wugId}`,
        error
      );
    }
  }

  function handleEditClick(event) {
    nav(`/wugs/${wugId}/edit`);
  }

  function handleDelClick(event) {
    if (confirm(`Click OK to delete ${wug.wug_name}`)) {
      delWug(wugId);
      alert(
        `${wug.wug_name} successfully deleted! \n You will now be re-directed to your profile page`
      );
      nav(`/${wug.user_username}`);
      return;
    } else {
      return;
    }
  }

  // console.log("This is my wug:", wug);

  useEffect(() => {
    // getWugs();
    getWugById(wugId);
    getWugJournals(wugId);
  }, []);

  return (
    <main className="wug-page">
      <section className="wug__details">
        <article className="wug">
          <div className="wug__img-div">
            {wug.wug_img && (
              <img
                className="wug__img"
                src={`${baseURL}/${wug.wug_img}`}
                alt=""
              />
            )}
          </div>
          <div className="wug__text">
            <h3 className="wug__name">{wug.wug_name}</h3>
            <p className="wug__species">{wug.wug_species}</p>
            <p className="wug__age"> {wug.wug_age} </p>
            <p className="wug__type">Wug</p>
            <p className="wug__common-names">{wug.wug_common_names}</p>
          </div>
        </article>

        <Link className="wug-user" to={`/${wug.user_username}`}>
          <div className="wug-user__img-div">
            {wug.user_img && (
              <img
                className="wug-user__img"
                src={`${baseURL}/${wug.user_img}`}
                alt=""
              />
            )}
          </div>
          <h4 className="wug-user__name">{wug.user_username}</h4>
          <p className="wug-user__location">
            {wug.user_city}, {wug.user_province}
          </p>
        </Link>
      </section>

      <div className="wug-page__buttons">
        <div className="wug-page__buttons-div">
          <button className="wug-page__delete" onClick={handleDelClick}>
            Delete Wug
          </button>
          <button className="wug-page__edit" onClick={handleEditClick}>
            Edit Wug
          </button>
        </div>

        <button className="wug-page__edit" onClick={handleEditClick}>
          {" "}
          Add Entry{" "}
        </button>
      </div>

      <section className="wugs-journals">
        {journals.length === 0 ? (
          <p className="wug-journals__loading"> Loading wugs ... </p>
        ) : (
          journals.map((journal) => (
            // console.log("This is my wug:", wug);
            <div className="wug-journal" key={journal.journal_id}>
              {/* <Link
                className="wug-journal-link" */}

              {/* // to={`/wugs/${wug.wug_id}`}
              > */}
              {/* <div className="wug-journal__img-div">
                  {journal.img && (
                    <img
                      className="user-wug__img"
                      src={`${baseURL}/${wug.wug_img}`}
                      alt=""
                    />
                  )}
                </div> */}

              <div className="wug-journal__heading">
                <h4 className="wug-journal__title">{journal.title}</h4>
                <p className="wug-journal__text"> {journal.formattedDate} </p>
              </div>
              <p className="wug-journal__text"> {journal.text} </p>
              {/* </Link> */}
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default WugPage;
