import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Compra extends BaseModel {
  @column({ isPrimary: true })
  public compraid: number

  @column()
  public proveedorid: number

  @column()
  public paqueteriaid: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
