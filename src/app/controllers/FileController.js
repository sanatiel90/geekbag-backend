import File from "./../models/File";

class FileController {
    async store(req, res){
        //valores das variaveis originalname e filename que constam no req.file serão armazenadas         
        //respectivamente como 'name' e 'path'
        const { originalname: name, filename: path } = req.file

        const file = await File.create({
            name,
            path
        })

        return res.json(file)
    }
}

export default new FileController()