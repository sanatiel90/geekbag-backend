import { Model, Sequelize } from "sequelize";

class Movie extends Model {
    static init(sequelize){
        super.init({
            title: Sequelize.STRING,
            score: Sequelize.INTEGER,
            comment: Sequelize.STRING,            
        }, 
        {
            sequelize
        })

        return this;
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }),
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
    }
    
}

export default Movie;