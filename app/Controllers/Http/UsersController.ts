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
            const postSchema = schema.create({
                email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
                password: schema.string(),
            })
            const validatedData = await request.validate({ schema: postSchema })
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
        if (auth.user?.id == params.id) {
            const users = await User.findByOrFail('id', params.id);
            return response.json({ users })
        } else {
            return response
                .status(400)
                .send({ error: { message: 'User has no permissions' } })
        }
    }

    public async update({ auth, request, response, params }: HttpContextContract) {
        if (auth.user?.accessid == 1) {
            try {
                const postSchema = schema.create({
                    email: schema.string({}, [rules.email()]),
                    password: schema.string(),
                    isActivated: schema.boolean(),
                    accessid: schema.number()
                })
                const validatedData = await request.validate({ schema: postSchema })
                const users = await User.findByOrFail('id', params.id)
                users.merge(validatedData)
                await users.save()
                if (validatedData.isActivated == false) {
                    await Database.from('api_tokens').where('user_id', params.id).delete()
                }
                return response.json({ users })
            } catch (e) {
                return e
            }
        } else if (auth.user?.id == params.id) {
            const postSchema = schema.create({
                email: schema.string({}, [rules.email()]),
                password: schema.string(),
            })
            const validatedData = await request.validate({ schema: postSchema })
            const users = await User.findByOrFail('id', params.id)
            users.merge(validatedData)
            await users.save()
            return response.json({ users })
        }
        else {
            return response
                .status(400)
                .send({ error: { message: 'User has no permissions' } })
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
