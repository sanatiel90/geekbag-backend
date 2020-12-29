import { Model, Sequelize } from "sequelize";

class File extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,   
            url: {
                type: Sequelize.VIRTUAL,
                //o get retorna qualquer valor que vc colocar no return, para o campo em questao (url) 
                get() {
                    return `http://localhost:3333/files/${this.path}`
                }
            }         
        }, 
        {
            sequelize
        })

        return this;
    }
}

export default File;