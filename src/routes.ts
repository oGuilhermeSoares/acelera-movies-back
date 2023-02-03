import {
  getTODO,
  itsWorks,
  getMovies,
  getUsers,
  getIdMovies,
  postMovies,
} from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", getMovies)
  app.get("/login", getUsers)
  app.get("/movies/:id", getIdMovies)
  app.post("/movie", postMovies)
}
