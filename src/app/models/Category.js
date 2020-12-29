import { Model, Sequelize } from "sequelize";

class Category extends Model {
    static init(sequelize){
        super.init({
            title: Sequelize.STRING,            
        }, 
        {
            sequelize
        })

        return this;
    }

    static associate(models){
        this.belongsTo(models.Type, { foreignKey: 'type_id', as: 'type' })
    }
   
}

export default Category;