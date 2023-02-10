import { Movies } from "@models/entity/ToDo"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovies = async (request, response) => {
  try {
    const moviesRepository = await getRepository(Movies).find()
    return response.status(200).json(moviesRepository)
  } catch (error) {
    return response.status(500).json(error)
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
    const moviesRepository = await getRepository(Movies)

    const createMovies = await moviesRepository.create(req.body)

    console.log(req.body)
    const saveMovies = await moviesRepository.save(createMovies)
    return res.status(200).json(saveMovies)
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: "error" })
  }
}

export const deleteMovies = async (req, res) => {
  try {
    const movieRepository = await getRepository(Movies)
    const deleteMovies = await movieRepository.delete(req.params.id)
    return res
      .status(200)
      .json({ message: "deleted successfully", deleteMovies })
  } catch (e) {
    return res.status(500).json({ message: "error" })
  }
}

export const updateMovies = async (request, response) => {
  try {
    const {
      title,
      subtitle,
      resume,
      releaseDate,
      image,
      director,
      writer,
      classification,
      studio,
      note,
    } = request.body
    const { id } = request.params
    const updateMoviesId = getRepository(Movies)
    const movie = await updateMoviesId.findOne(id)
    if (title) {
      movie.title = title
    }
    if (subtitle) {
      movie.subtitle = subtitle
    }
    if (resume) {
      movie.resume = resume
    }
    if (releaseDate) {
      movie.releaseDate = releaseDate
    }
    if (image) {
      movie.image = image
    }
    if (director) {
      movie.director = director
    }
    if (writer) {
      movie.writer = writer
    }
    if (classification) {
      movie.classification = classification
    }
    if (studio) {
      movie.studio = studio
    }
    if (note) {
      movie.note = note
    }
    const result = await updateMoviesId.save(movie)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}
