const express = require("express");
const app = express();
const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

////////////////L'url / affiche "Welcome to my favourite movie list"////////////////////////

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

///////////////// L'url /api/movies affiche la liste des films au format json//////////////////////

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

////////////////// L'url /api/movies/2 affiche le film The Godfather au format json//////////////////////////

app.get("/api/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);

  let movie = "";
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === movieId) {
      movie = movies[i];
    }
  }

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).send("Not Found");
  }
});

//////////////////////////////////////////

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
