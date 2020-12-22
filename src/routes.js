import { Router } from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

//var upload será um middleware criado a partir da lib multer, usando as configs de multerConfig
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.put('/users', UserController.update)

//rota files recebera o middleware upload, que vai usar a funcao single pois apenas um arquivo será enviado
//esse arquivo tera como name do campo a palavra 'file'
routes.post('/files', upload.single('file'), FileController.store)


export default routes;