import Type from "./../models/Type";

class TypeController {
    async store(req, res){    
        const { title } = req.body

        const type = await Type.create({
            title,
        })

        return res.json(type)
    }
}

export default new TypeController()