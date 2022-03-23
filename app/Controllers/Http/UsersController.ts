import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/Users'


export default class UsersController {
    public async index({ auth, response }: HttpContextContract) {
        if (auth.user?.accessid == 1) {
            const users = await User.query();
            return response.json({ users })
        } else {
            return response
                .status(400)
                .send({ error: { message: 'User has no permissions' } })
        }
    }

    public async store({ auth, request, response }: HttpContextContract) {
        if (auth.user?.accessid == 1) {
            const validatedData = await request.validate({ schema: User.validarAdmin() })
            const users = await User.create(validatedData);
            return response.json({ users });
        }
        else {
            return response
                .status(400)
                .send({ error: { message: 'User has no permissions' } })
        }
    }

    public async show({ auth, response, params }: HttpContextContract) {
        try {
            User.verUno(auth.user?.accessid, auth.user?.id, params)
        } catch
        {
            return response
                .status(400)
                .send({ error: { message: 'User has no permissions' } })
        }
    }

    public async update({ auth, request, response, params }: HttpContextContract) {
        try {
            const users = await User.findByOrFail('id', params.id)
            const validado = await User.validar(auth.user?.accessid, request)
            users.merge(validado)
            await users.save()
            User.desactivar(users)
            return response.json({ users })
        } catch (e) {
            return response
                .status(400)
                .send({ error: { message: 'Something is wrong' } })
        }
    }

    public async destroy({ auth, response, params }: HttpContextContract) {
        if (auth.user?.accessid == 1) {
            const users = await User.findByOrFail('id', params.id)
            await users.delete()
            return response.json({ users })
        } else {
            return response
                .status(400)
                .send({ error: { message: 'User has no permissions' } })
        }
    }
}
