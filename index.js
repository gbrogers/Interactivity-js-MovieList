//console.log("Hello World!");
const message = document.querySelector("#message");

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector("input").value;
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField;
  movie.appendChild(movieTitle);
  document.querySelector("ul").appendChild(movie);

  //Cross Out once pressed
  movieTitle.addEventListener("click", crossOffMovie);

  //delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  movie.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteMovie);
}

function deleteMovie(event) {
  console.log(event);
  let deletedMovie = event.target.parentNode.firstChild.textContent;
  event.target.parentNode.remove("li");
  message.textContent = `${deletedMovie} deleted!`;
  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  let movieName = event.target.textContent;
  if (event.target.classList.contains("checked")) {
    message.textContent = `${movieName} Watched!`;
  } else {
    message.textContent = `${movieName} added back!`;
  }
  revealMessage();
}

function revealMessage() {
  setTimeout(() => {
    message.classList.add("hide");
  }, 1000);
  message.classList.remove("hide");
}

document.querySelector("form").addEventListener("submit", addMovie);
