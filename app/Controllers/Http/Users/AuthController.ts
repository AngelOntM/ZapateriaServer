import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/Users'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
    public async register({ request, response }: HttpContextContract) {
        // validate email
        const validations = await schema.create({
            email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
            password: schema.string({}, [rules.confirmed()]),
        })
        const data = await request.validate({ schema: validations })
        const user = await User.create(data)
        return response.created(user)
    }

    //   login function
    public async login({ request, response, auth }: HttpContextContract) {
        const password = await request.input('password')
        const email = await request.input('email')

        try {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '24hours',
            })
            return token.toJSON()
        } catch {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '24hours',
            })
            return token.toJSON()
        }
    }

    //   logout function
    public async logout({ auth, response }: HttpContextContract) {
        await auth.logout()
        return response.status(200)
    }
}
