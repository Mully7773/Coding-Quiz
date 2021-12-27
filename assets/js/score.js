function retrieve() {
    var records = JSON.parse(window.localStorage.getItem("initials"));
    var pg = document.createElement("p");
    var information = document.createTextNode(records);
    pg.appendChild(information);
    var element = document.querySelector("#highscores");
    element.appendChild(pg);
}

retrieve(); //Gives me null


