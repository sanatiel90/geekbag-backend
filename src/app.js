import express from 'express'
import path from 'path'
import routes from './routes'

import './database'

class App {
    constructor(){
        this.server = express()
        
        this.middlewares()
        this.routes()
    }

    middlewares(){
        //middle para reconhecer json
        this.server.use(express.json()) 

        //middle usar recurso static do express na rota files; esse recurso permite acessar arquivos
        //estáticos da aplicação, como as imagens armazenadas na pasta uploads
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

    }

    routes(){
        this.server.use(routes)
    }

}

export default new App().server;







