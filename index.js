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
  event.target.parentNode.remove("li");
  message.textContent = "Movie deleted!";
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie Watched!";
  } else {
    message.textContent = "Movie added back!";
  }
}

document.querySelector("form").addEventListener("submit", addMovie);
