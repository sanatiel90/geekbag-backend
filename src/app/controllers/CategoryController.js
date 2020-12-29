import Category from './../models/Category';
import Type from './../models/Type';

class CategoryController {
    async store(req, res){        

        const category = await Category.create(req.body)

        return res.json(category)
    }

    async update(req, res){
        const categoryId = req.params.id;
        const category = await Category.findByPk(categoryId)

        if (!category){
            return res.status(401).json({ error: 'Categoria não localizada' })
        }
        
        const { id, title, type_id } = await category.update(req.body)

        return res.json({
            id,
            title,
            type_id
        })        

    }


    async index(req, res){
        const categories = await Category.findAll({
            attributes: ['id', 'title'],
            include: [
                {
                    model: Type,
                    as: 'type',
                    attributes: ['title']
                }
            ]
        })

        return res.json(categories)
    }


}

export default new CategoryController()