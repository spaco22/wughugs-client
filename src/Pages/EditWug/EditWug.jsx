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
  const [imgFile, setImgFile] = useState();

  async function getWugById(wugId) {
    try {
      const response = await axios.get(`${baseURL}/wugs/${wugId}`);
      // console.log(response.data);
      setWug(response.data);
    } catch (error) {
      console.error(`Error retrieving data for wug with ID ${wugId}`, error);
    }
  }

  async function editWug(editedWug) {
    try {
      const response = await axios.put(`${baseURL}/wugs/${wugId}`, editedWug);
      // console.log(response.data);
      // setWug(response.data);
    } catch (error) {
      console.error(`Error updating data for wug with ID ${wugId}`, error);
    }
  }

  const handleImgChange = (event) => {
    setImgFile(event.target.files[0]);
  };

  // async function handleChange(event) {
  //   const { name, value } = e.target;
  //   setUserData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // }

  function handleFormSubmit(event) {
    event.preventDefault();

    const editedName = event.target.name.value;
    const editedSpecies = event.target.name.value;
    const editedType = event.target.name.value;
    const editedCommonNames = event.target.name.value;
    const editedAge = event.target.name.value;

    // const editedWug = {
    //   wug_id: wugId,
    //   // wug_img: event.target.img.value,
    //   wug_name: editedName,
    //   wug_species: event.target.species.value,
    //   wug_type: event.target.type.value,
    // };

    const editedWug = new FormData();
    newWug.append("wug_name", editedName);
    newWug.append("wug_species", newSpecies);
    newWug.append("wug_type", newType);
    newWug.append("wug_common_names", newCommonNames);
    newWug.append("wug_age", newAge);
    newWug.append("wug_img", imgFile);

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

      <form
        action="submit"
        className="wug-form"
        encType="multipart/form-data"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="img" className="wug-form__label">
          Upload Image
        </label>
        <input
          type="file"
          className="wug-form__img"
          name="wug_img"
          filename={imgFile}
          accept="img/*"
          onChange={handleImgChange}
          defaultValue={wug.wug_img}
        />

        <label htmlFor="name" className="wug-form__label">
          Wug Name
        </label>
        <input
          type="text"
          className="wug-form__name"
          name="name"
          defaultValue={wug.wug_name}
          // onChange={handleChange}
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

        {/* <label htmlFor="quantity" className="wug-form__label">Quantity</label>
            <input type="radio" className="wug-form__img" name="quantity" /> */}

        <label htmlFor="type" className="wug-form__label">
          Wug Type
        </label>
        <input
          type="text"
          className="wug-form__type"
          name="type"
          defaultValue={wug.wug_type}
        />

        <label htmlFor="commonNames" className="wug-form__label">
          Common Names
        </label>
        <input
          type="text"
          className="wug-form__species"
          name="commonNames"
          defaultValue={wug.wug_common_names}
        />

        <label htmlFor="age" className="wug-form__label">
          Age
        </label>
        <input
          type="text"
          className="wug-form__species"
          name="age"
          defaultValue={wug.wug_species}
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
