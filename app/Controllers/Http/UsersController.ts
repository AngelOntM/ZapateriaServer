import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class UsersController {
    public async index({ response }: HttpContextContract) {
        const users = await User.query();
        return response.json({ users })
    }

    public async store({ request, response }: HttpContextContract) {
        const postSchema = schema.create({
            email: schema.string(),
            password: schema.string()
        })
        const validatedData = await request.validate({ schema: postSchema })
        const users = await User.create({ email: validatedData.email, password: validatedData.password });
        return response.json({ users });

    }

    public async show({ response, params }: HttpContextContract) {
        const users = await User.findByOrFail('id', params.id);
        return response.json({ users })
    }

    public async update({ request, response, params }: HttpContextContract) {
        const postSchema = schema.create({
            email: schema.string(),
            password: schema.string()
        })
        const validatedData = await request.validate({ schema: postSchema })
        const users = await User.findByOrFail('id', params.id)
        users.merge(validatedData)
        await users.save()
        console.log(response)
        return response.json({ users })
    }

    public async destroy({ response, params }: HttpContextContract) {
        const users = await User.findByOrFail('id', params.id)
        await users.delete()
        return response.json({ users })
    }
}
