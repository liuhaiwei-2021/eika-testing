import React from "react";

function WelcomeScreen({ setShowModal }) {
	return (
		<div className="welcome" data-testid="welcome">
			<img
				role="illustration"
				className="sketch"
				alt="sketch"
				src="/assets/images/sketch.png"
			/>{" "}
			{/*  UI #4 illustration should be rendered */}
			<h1>EIKA's shopping list</h1>
			<p>
				Welcome to EIKA’s shopping list. Here you will be able to create a todo list with
				for the furniture you want to buy.
			</p>
			<p>
				To get started press the Add new item button and a popup will ask you the name and
				the price of the item you want to add. You can also and an image after the item is
				added by touching the camera icon.
			</p>
			<button className="btn-add" onClick={() => setShowModal(true)}>
				Add a new task
			</button>
			{/*  UI #5 Add a  new task button  should rendered */}
		</div>
	);
}

export default WelcomeScreen;
