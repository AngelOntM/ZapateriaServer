import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Supplier extends BaseModel {
  @column({ isPrimary: true })
  public supplierid: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}