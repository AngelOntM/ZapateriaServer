import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Detallecompra extends BaseModel {
  @column({ isPrimary: true })
  public detalleid: number

  @column()
  public compraid: number

  @column()
  public productoid: number

  @column()
  public cantidad: number

  @column()
  public precio: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
