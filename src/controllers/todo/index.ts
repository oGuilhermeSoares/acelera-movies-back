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
