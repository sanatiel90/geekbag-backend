import multer from 'multer'
import crypto from 'crypto'
import { extname, resolve } from "path";

/**
 * configuracoes do multer:
 * destination: local pra onde os arquivos serao enviados
 * filename: nome do arquivo, recebe como param a requisicao, o arquivo em si e uma funcao callback que 
 * vai ser usada para tratar o retorno do nome do arquivo
 */
export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, res) => {
                if(err) return callback(err);

                return callback(null, res.toString('hex') + extname(file.originalname))
            })
        }
    })
}