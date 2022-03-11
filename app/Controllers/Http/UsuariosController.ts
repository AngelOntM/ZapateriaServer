// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const usuarios = use('App/Models/User')
export default class UsuariosController {

    async store(request, response) {

        const userData = request.only(['correo', 'password'])
    }
}
