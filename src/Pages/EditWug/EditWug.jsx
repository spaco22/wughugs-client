import React from 'react';
import "./EditWug.scss";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditWug() {

    const { wugId } = useParams();
    const baseURL = import.meta.env.VITE_API_URL;
    const nav = useNavigate();

    const [wug, setWug] = useState({});

    async function getWugById(wugId) {
        try {
          const response = await axios.get(`${baseURL}/wugs/${wugId}`);
          // console.log(response.data);
          setWug(response.data);
        } catch (error) {
          console.error("Error retrieving users data", error);
        }
      }

    function handleCancelClick(event) {
        confirm("Click OK to cancel");
      }

      useEffect(() => {
        getWugById(wugId);
      }, [])

  return (
<main className="edit-wug">
      <h2 className="edit-wug__title">Edit</h2>

      <form action="submit" className="wug-form">
        <label htmlFor="img" className="wug-form__label">
          Upload Image
        </label>
        <input type="file" className="wug-form__img" name="img" />

        <label htmlFor="name" className="wug-form__label">
          Wug Name
        </label>
        <input type="text" className="wug-form__name" name="name" />

        <label htmlFor="species" className="wug-form__label">
          Wug Species
        </label>
        <input type="text" className="wug-form__species" name="species" />

        {/* <label htmlFor="quantity" className="wug-form__label">Quantity</label>
            <input type="radio" className="wug-form__img" name="quantity" /> */}

        <label htmlFor="type" className="wug-form__label">
          Wug Type
        </label>
        <input type="text" className="wug-form__type" name="type" />

        <button className="wug-form__button-add">Add Wug</button>
        <button
          className="wug-form__button-cancel"
          onClick={handleCancelClick}
          type="reset"
        >
          Cancel
        </button>
      </form>
    </main>
  )
}

export default EditWug