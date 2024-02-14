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
publicationRouters.patch("/save" ,file.single('file'), publicationController.update)
publicationRouters.get("/find/:name*?" , publicationController.find)
publicationRouters.get("/findById/:id", publicationController.findById)

export default publicationRouters
