import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username', 255).notNullable().unique()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.boolean('is_activated').notNullable().defaultTo(true)
      table.string('remember_me_token').nullable()
      table.timestamps()
      table.index(['id', 'username'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
