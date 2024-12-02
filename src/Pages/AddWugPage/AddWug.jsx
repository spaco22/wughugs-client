import React from "react";
import "./AddWug.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddWug() {
  const baseURL = import.meta.env.VITE_API_URL;
  const nav = useNavigate();

  async function addWug(newWug) {
    try {
      const response = await axios.post(`${baseURL}/wugs`, newWug, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        alert(
          "You're new wug has been added! \n You will now be re-directed your user page"
        );
        // console.log(response.data);
        // const username = response.data.newUser.user_username;
        // nav(`/${username}`);
      }
    } catch (error) {
      console.error("Error adding new wug", error);
    }
  }

  function handleCancelClick(event) {
    confirm("Click OK to cancel");

    if (confirm) {
      // nav(`/${userId}`);
      console.log("cancel");
    }
  }

  function handleAddWug(event) {
    event.preventDefault();

    const newImg = event.target.img.value;
    const newName = event.target.name.value;
    const newSpecies = event.target.species.value;
    const newType = event.target.type.value;
    const newCommonNames = event.target.commonNames.value;
    const newAge = event.target.age.value;

    if (!newName) {
      alert("Please provide a name");
      return;
    }

    const newWug = {
      wug_name: newName,
      wug_species: newSpecies,
      wug_type: newType,
      wug_common_names: newCommonNames,
      wug_age: newAge,
      wug_img: "",
    };

    addWug(newWug);
  }

  return (
    <main className="add-wug">
      <h2 className="add-wug__title">Add</h2>

      <form
        action="submit"
        className="wug-form"
        encType="multipart/form-data"
        onSubmit={handleAddWug}
      >
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

        <label htmlFor="commonNames" className="wug-form__label">
          Common Names
        </label>
        <input type="text" className="wug-form__species" name="commonNames" />

        <label htmlFor="age" className="wug-form__label">
          Age
        </label>
        <input type="text" className="wug-form__species" name="age" />

        <div className="wug-form__buttons">
          <button
            className="wug-form__button-cancel"
            onClick={handleCancelClick}
            type="reset"
          >
            Cancel
          </button>
          <button className="wug-form__button-add">Add Wug</button>
        </div>
      </form>
    </main>
  );
}

export default AddWug;
