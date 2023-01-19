import { Movies } from "@models/entity/ToDo"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovies = (request, response) => {
  try {
    const moviesRepository = getRepository(Movies)
    return response.json(moviesRepository)
  } catch (err) {
    return response.json({ message: "error" })
  }
}
