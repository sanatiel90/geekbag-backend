import { Model, Sequelize } from 'sequelize';

class Type extends Model {
    static init(sequelize){
        super.init({
            title: Sequelize.STRING
        },
        {
            sequelize
        })            

        return this;
    }

}

export default Type;