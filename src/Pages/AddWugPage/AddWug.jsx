import React from "react";
import "./AddWug.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function AddWug() {
  const { username } = useParams();
  const nav = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL;

  // let userId;

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [imgFile, setImgFile] = useState()

  async function getUsers() {
    try {
      const response = await axios.get(`${baseURL}/users`);
      // console.log(response.data);
      setUsers(response.data);

      const matchedUser = response.data.find(user => user.user_username === username);
      if (matchedUser) {
        setUserId(matchedUser.user_id);
      }
    } catch (error) {
      console.error("Error retrieving users data", error);
    }
  }


  // if(users.length !==0 ) {
  //   for (let i = 0; i < users.length; i++) {
  //     if (username === users[i].user_username) {
  //       userId = users[i].user_id;
  //       break;
  //     }
  //   }
  // }

  async function addWug(newWug) {
    try {
      const response = await axios.post(`${baseURL}/wugs`, newWug);
      if (response) {
        alert(
          "You're new wug has been added! \n You will now be re-directed your user page"
        );
        // console.log(response.data);
        // const username = response.data.newUser.user_username;
        nav(`/${username}`);
      }
    } catch (error) {
      console.error("Error adding new wug", error);
    }
  }

  const handleImgChange = (event) => {
    setImgFile(event.target.files[0]);
  }

  function handleCancelClick(event) {
    confirm("Click OK to cancel");

    if (confirm) {
      nav(`/${username}`);
      return;
      // console.log("cancel");
    }
  }

  function handleAddWug(event) {
    event.preventDefault();

    // const newImg = event.target.img.value;
    const newName = event.target.name.value;
    const newSpecies = event.target.species.value;
    const newType = event.target.type.value;
    const newCommonNames = event.target.commonNames.value;
    const newAge = event.target.age.value;

    if (!newName) {
      alert("Please provide a name");
      return;
    }

    const newWug = new FormData();
    newWug.append("user_id", userId);
    newWug.append("wug_name", newName);
    newWug.append("wug_species", newSpecies);
    newWug.append("wug_type", newType);
    newWug.append("wug_common_names", newCommonNames);
    newWug.append("wug_age", newAge);
    newWug.append("wug_img", imgFile);


    // const newWug = {
    //   user_id: userId,
    //   wug_name: newName,
    //   wug_species: newSpecies,
    //   wug_type: newType,
    //   wug_common_names: newCommonNames,
    //   wug_age: newAge,
    //   wug_img: imgFile,
    // };

    // console.log(newWug);

    addWug(newWug);
  }

  useEffect(() => {
    getUsers();
  }, [])

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
        <input type="file" className="wug-form__img" name="wug_img" filename={imgFile} accept="img/*" onChange={ handleImgChange } />

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
