import { Movies } from "@models/entity/ToDo"
import { response } from "express"
import { oauth2 } from "googleapis/build/src/apis/oauth2"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovies = (request, response) => {
  try {
    const moviesRepository = getRepository(Movies).find()
    return response.json(moviesRepository)
  } catch (err) {
    return response.json({ message: "error" })
  }
}

export const getUsers = async (request, response) => {
  const { username, password } = await request.body
  console.log(username, password)
  if (username === "gui" && password === "123") {
    return response.status(200).json({ message: "sucess" })
  }
  return response.status(400).json({ message: "error" })
}

export const getIdMovies = async (request, response) => {
  try {
    const { id } = request.params
    const moviesRepository = await getRepository(Movies)
    const findIdMovies = moviesRepository.findOne(id)
    return response.status(200).json(findIdMovies)
  } catch (error) {
    return response.status(500).json({ message: "error" })
  }
}

export const postMovies = async (req, res) => {
  try {
    const movieRepository = await getRepository(Movies)
    const createMovies = movieRepository.save(req.body)
    return res.status(200).json(createMovies)
  } catch (e) {
    return res.status(500).json({ message: "error" })
  }
}
