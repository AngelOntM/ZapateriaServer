import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Paqueteria extends BaseModel {
  @column({ isPrimary: true })
  public paqueteriaid: number

  @column()
  public nombre: string

  @column()
  public telefono: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
