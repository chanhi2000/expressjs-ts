import express from "express"
import type {Express, Request, Response } from "express"
import cors from "cors"

import {pets} from "./data/pets"
import type {Pet} from "./data/pets"

const PORT = 8000
const app: Express = express()

type PetQeuryParams = {
  species?:string,
  adopted?: 'true' | 'false'
}

app.use(cors())

app.get("/", (
  req: Request<{}, unknown, {}, PetQeuryParams>,
  res: Response<Pet[]>
):void => {
  const {species, adopted} = req.query
  let filteredPets:Pet[] = pets

  if (species) {
    filteredPets = filteredPets.filter((p:Pet):boolean => p.species.toLowerCase() === species.toLowerCase())
  }

  if (adopted) {
    filteredPets = filteredPets.filter((p:Pet):boolean => p.adopted === JSON.parse(adopted))
  }
  res.json(filteredPets)
})

app.get("/:id", (
  req: Request<{id:string}>,
  res: Response<Pet|{message:string}>
):void => {
  const {id} = req.params
  const pet = pets.find((p:Pet):boolean => p.id.toString() === id)
  if (pet) {
    res.json(pet)
  } else {
    res.status(404).json({message: "No pet with that ID"})
  }
})

app.use((req: Request, res: Response<{message:string}>):void => {
  res.status(404).json({message: "no endpoint found"})
})

app.listen(PORT, ():void => {
  console.log("Listening on port: ", PORT)
})