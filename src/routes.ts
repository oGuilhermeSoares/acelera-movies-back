import {
  getTODO,
  itsWorks,
  getMovies,
  getUsers,
  getIdMovies,
  postMovies,
  deleteMovies,
  updateMovies,
} from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", getMovies)
  app.get("/login", getUsers)
  app.get("/movies/:id", getIdMovies)
  app.post("/movies", postMovies)
  app.delete("/movies/:id", deleteMovies)
  app.put("/movies/:id", updateMovies)
}
