import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Token extends BaseModel {
  @column({ isPrimary: true })
  public tokenid: number

  @column()
  public userid: number

  @column()
  public token: string

  @column()
  public type: string

  @column()
  public is_revoked: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
