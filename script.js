"use strict"

const form = document.querySelector("form");
const input = document.querySelector("input");
const error_msg = document.createElement("span");

error_msg.style.color = "var(--light-red)";
error_msg.style.fontStyle = "italic";
error_msg.style.fontSize = "12px";
error_msg.style.fontWeight = "300";
error_msg.style.position = "absolute";
error_msg.style.top = 0;
error_msg.style.left = 0;



form.addEventListener("submit", (event) => {
	event.preventDefault();

	let contain_error = false;
	const valid_email = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

	if (input.value === "") {
		contain_error = true;
		error_msg.textContent = "Email cannot be empty";
	} else if (!input.value.match(valid_email)) {
		contain_error = true;
		error_msg.textContent = "Please provide a valid email address";
	}

	if (contain_error) {
		input.style.borderColor = "var(--light-red)";

		if (input.offsetWidth < 475) {
			input.style.marginBottom = "3%";
		}

		const coords = {
			x: input.offsetLeft + 30,
			y: input.offsetTop + input.offsetHeight + 10
		};

		error_msg.style.setProperty("transform", `translate(${coords.x}px, ${coords.y}px)`);
		document.body.appendChild(error_msg);
	} else {
		input.style.borderColor = "initial";
		error_msg.textContent = "";
		input.style.marginBottom = "0";
		form.reset();
	}
});