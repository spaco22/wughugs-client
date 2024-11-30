import React from 'react';
import "./AddWug.scss";

function AddWug() {
  return (
    <main className="add-wug">
        <h2 className="add-wug__title">Add</h2>

        <form action="submit" className="wug-form">
          <label htmlFor="img" className="wug-form__label">Upload Image</label>
            <input type="file" className="wug-form__img" name="img" />

            <label htmlFor="name" className="wug-form__label">Wug Name</label>
            <input type="text" className="wug-form__name" name="name" />

            <label htmlFor="species" className="wug-form__label">Wug Species</label>
            <input type="text" className="wug-form__species" name="species" />

            {/* <label htmlFor="quantity" className="wug-form__label">Quantity</label>
            <input type="radio" className="wug-form__img" name="quantity" /> */}

            <label htmlFor="type" className="wug-form__label">Wug Type</label>
            <input type="text" className="wug-form__type" name="type" />

            <button className="wug-form__button-add">Add Wug</button>
            <button className="wug-form__button-cancel">Cancel</button>

        </form>
    </main>
  )
}

export default AddWug