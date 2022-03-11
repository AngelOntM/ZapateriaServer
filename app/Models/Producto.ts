import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  public productid: number

  @column()
  public nombre: string

  @column()
  public color: string

  @column()
  public existencias: number

  @column()
  public precio: number

  @column()
  public tallaid: number

  @column()
  public marcaid: number

  @column()
  public categoriaid: number

  @column()
  public imagen: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
