import Sequelize from "sequelize";
import User from './../app/models/User'
import File from './../app/models/File'
import Type from './../app/models/Type'
import Category from './../app/models/Category'
import Movie from './../app/models/Movie'
import databaseConfig from './../config/database'

const models = [User, File, Type, Category, Movie]

class Database {
    constructor(){  
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig)
        
        //percorrendo todos os models, executando o metodo init de cada um atraves da conexao passada como param
        models.map(model => model.init(this.connection))

        //percorrendo todos os models, verificando se o model em questao tem o metodo associate,
        //se tiver, o executa, usando como param todos os models
        models.map(model => model.associate && model.associate(this.connection.models))
    }


}

export default new Database()