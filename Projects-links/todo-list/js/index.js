var clear = document.querySelector(".clear");
var dateElement = document.getElementById("date");
var list = document.getElementById("list");
var input = document.getElementById("input");

input.focus();// position of the curser after refreshing the page
var serializedData = localStorage.getItem("TODO");
if (serializedData) {
	var oldData = JSON.parse(serializedData); // we are bring the data JSON to normal date with parse and save it ot old data
	var id = oldData.length;
	for (i = 0; i < id; i++) {
		let item = oldData[i]; // counter
		if (item !== null) {// we dont need the null data 
			displayTodo(item.name, item.id, item.status);
		}
	};

} else {
	var oldData = []; // push data 
	var id = 0;
}

clear.addEventListener("click", () => {
	list.innerHTML = "";  // list is ul
	localStorage.clear();
	location.reload(); // refresh the browser 
});

var today = new Date();
var options = { weekday: "long", month: "short", day: "numeric" };

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

input.addEventListener("keyup", (event) => {

	if (event.keyCode == 13) {
		var toDo = input.value.trim();
		if (toDo.length > 0) { // if we want to enter should be not blank 
			oldData.push({  // pushing the data as object and this obj has the information of our array
				name: toDo,
				id: id,
				status: "incomplete", // its complete after doing the item.
			
			});
			localStorage.setItem("TODO", JSON.stringify(oldData)); // save the data or array to the local storage of PC
			displayTodo(toDo, id); // todo name is optional and u can take with the same name later 
			// 
			id++;
			input.value = ""; // after entering the data input should be clear
			input.focus(); // curser must be again the input position
		}
	}
});

function displayTodo(toDo, id, status = "incomplete") { //  incomplete is default value 
	if (status == "complete") {
		var item = `<li class ="item ${status}" id ="${id}">
					<i class ="fas fa-check-circle check-icon"></i>
					<p class ="text"> ${toDo} </p>
					<i class="far fa-trash-alt delete-icon"></i>
					</li>`;

					// here we are creating a new list item
					// todo mean what we have written in our input
					// if we want to show variable than we use the dollar sign 
	} else {
		// if (status == "incomplete") 
		var item = `<li class ="item ${status}" id ="${id}">
					<i class ="far fa-circle circle-icon"></i>
					<p class ="text"> ${toDo} </p>
					<i class="far fa-trash-alt delete-icon"></i>
		            </li>`;
	}

	const position = "beforeend";
	list.insertAdjacentHTML(position, item);  // we need to add the item inside list ,, position mean at the beginning or at the end
}

list.addEventListener("click", (event) => { // to delete the icon from inside the list
	if (event.target.classList.contains("delete-icon")) { // take the child  date icon and selected
		var deleted = event.target.parentNode.getAttribute("id").trim();// parentNode delete the item that with targeted position
		delete oldData[deleted];
		localStorage.setItem("TODO", JSON.stringify(oldData));
		event.target.parentNode.remove(); // remove from interface 
	}
});


list.addEventListener("click", (event) => {
	if (event.target.classList.contains("circle-icon")) {
		event.target.className = "fas fa-check-circle check-icon";// its changed from circle item to check item
		event.target.parentNode.className = "item complete";
		var updated = event.target.parentNode.getAttribute("id").trim(); // we are taking the incomplete and make it complete
		oldData[updated].status = "complete";
		localStorage.setItem("TODO", JSON.stringify(oldData));

	} else if (event.target.classList.contains("check-icon")) {
		event.target.className = "far fa-circle circle-icon";
		event.target.parentNode.className = "item incomplete";
		var updated = event.target.parentNode.getAttribute("id").trim();
		oldData[updated].status = "incomplete";
		localStorage.setItem("TODO", JSON.stringify(oldData));
	}
});