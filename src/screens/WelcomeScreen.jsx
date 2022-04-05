import React from "react";

function WelcomeScreen({ setShowModal }) {
  return (
    <div className="welcome">
      <img className="logo" alt="logo" src="/assets/images/logo.svg" />
      <img className="sketch" alt="sketch" src="/assets/images/sketch.png" />
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also and an
        image after the item is added by touching the camera icon.
      </p>
      <button className="btn-add" onClick={() => setShowModal(true)}>
        Add a new item
      </button>
    </div>
  );
}

export default WelcomeScreen;
