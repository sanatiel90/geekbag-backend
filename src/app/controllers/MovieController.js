import * as Yup from 'yup';

import Movie from './../models/Movie';
import User from './../models/User';
import Category from './../models/Category';

class MovieController {
    async store(req, res){

        const schema = Yup.object().shape({
            title: Yup.string().required(), 
            comment: Yup.string(),

        })

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Erro de validação' }) 
        }
        

        const { id, title, score, comment, category_id, user_id } = await Movie.create({
            title: req.body.title,
            score: req.body.score,
            comment: req.body.comment,
            category_id: req.body.category_id,
            user_id: req.userId
        })

        return res.json({
            id, title, score, comment, category_id, user_id
        })
    }

    async update(req, res){
        /*const schema = Yup.object().shape({
            title: Yup.string(),
            comment: Yup.string(),            
        })

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Erro de validação' }) 
        }

        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId)

        //so fazer verificacao de email se o email tiver sido informado na requisicao
        if (email && email !== user.email){

            //verifica se novo email ja esta sendo usado
            const userExists = await User.findOne({ where:{ email }} )

            if (userExists){
                return res.status(401).json({ error:'E-mail já está sendo utilizado' })
            }
        }

        //se ele informou o oldPassword, verificar se oldPassword é igual a senha atual 
        if (oldPassword && !(await user.checkPassword(oldPassword))){
            return res.status(401).json({ error:'Senha antiga não confere' })
        }

        const { id, name } = await user.update(req.body)

        return res.json({
            id,
            name,
            email
        })        */

    }


    async index(req, res){
       /*  const movies = await Movie.findAll({
            where: { user_id: req.userId },
            attributes: ['id', 'title', 'score', 'comment', 'category_id', 'user_id'],
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['title', 'type_id'],
                }, 
                {
                    model: User,
                    as: 'user',
                    attributes: ['name', 'email']
                }
            ]
        })

        return res.json(movies)*/
    }


}

export default new MovieController()