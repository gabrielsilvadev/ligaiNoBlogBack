import { Router } from 'express'
import controller from '../../controller'
import isAuthenticated  from "../../middleware/alphaUser"
import multer from 'multer'
const publicationRouters = Router()
const publicationController = new controller.PublicationController
const file = multer({
    dest: "./temp"
})

publicationRouters.post("/create",file.single('file'),/*isAuthenticated*/  publicationController.create)
publicationRouters.patch("/save",isAuthenticated , publicationController.update)
publicationRouters.patch("/find/:name",isAuthenticated , publicationController.find)

export default publicationRouters
