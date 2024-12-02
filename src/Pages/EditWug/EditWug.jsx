import React from "react";
import "./EditWug.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditWug() {
  const { wugId } = useParams();
  const baseURL = import.meta.env.VITE_API_URL;
  const nav = useNavigate();

  const [wug, setWug] = useState({});

  async function getWugById(wugId) {
    try {
      const response = await axios.get(`${baseURL}/wugs/${wugId}`);
      setWug(response.data);
    } catch (error) {
      console.error(`Error retrieving data for wug with ID ${wugId}`, error);
    }
  }

  async function editWug(editedWug) {
    try {
      const response = await axios.put(`${baseURL}/wugs/${wugId}`, editedWug);
    } catch (error) {
      console.error(`Error updating data for wug with ID ${wugId}`, error);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const editedName = event.target.name.value;

    const editedWug = {
      wug_id: wugId,
      wug_name: editedName,
      wug_species: event.target.species.value,
      wug_type: event.target.type.value,
    };

    editWug(editedWug);
    alert(
      `${wug.wug_name} successfully updated! \n You will now be re-directed to the Wug Details Page`
    );
    nav(`/wugs/${wugId}`);
  }

  function handleCancelClick(event) {
    confirm("Click OK to cancel");
    if (confirm) {
      nav(`/wugs/${wugId}`);
    }
  }

  useEffect(() => {
    getWugById(wugId);
  }, []);

  return (
    <main className="edit-wug">
      <h2 className="edit-wug__title">Edit</h2>

      <form action="submit" className="wug-form" onSubmit={handleFormSubmit}>
        <label htmlFor="img" className="wug-form__label">
          Upload Image
        </label>
        <input type="file" className="wug-form__img" name="img" />

        <label htmlFor="name" className="wug-form__label">
          Wug Name
        </label>
        <input
          type="text"
          className="wug-form__name"
          name="name"
          defaultValue={wug.wug_name}
        />

        <label htmlFor="species" className="wug-form__label">
          Wug Species
        </label>
        <input
          type="text"
          className="wug-form__species"
          name="species"
          defaultValue={wug.wug_species}
        />

        <label htmlFor="type" className="wug-form__label">
          Wug Type
        </label>
        <input
          type="text"
          className="wug-form__type"
          name="type"
          defaultValue={wug.wug_type}
        />

        <div className="wug-form__buttons">
          <button
            className="wug-form__button-cancel"
            onClick={handleCancelClick}
            type="reset"
          >
            Cancel Edit
          </button>
          <button className="wug-form__button-add">Edit Wug</button>
        </div>
      </form>
    </main>
  );
}

export default EditWug;
