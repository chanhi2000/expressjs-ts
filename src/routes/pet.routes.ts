import express from "express";
import type {Router,Request,Response} from "express";

import {pets} from "../data/pets"
import type {Pet} from "../data/pets"

import {getPets, getPetById} from "../controllers/pets.controllers"
import type {PetQeuryParams} from "../controllers/pets.controllers"
import { validNumericId, pleaseAuth } from "../middleware/pets.middleware";

export const petRouter:Router = express.Router()

petRouter.get("/", getPets)
petRouter.get("/:id", pleaseAuth, validNumericId, getPetById)