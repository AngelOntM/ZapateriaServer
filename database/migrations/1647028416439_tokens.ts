import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tokens extends BaseSchema {
  protected tableName = 'tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('tokenid')
      table
        .integer('userid')
        .unsigned()
        .references('users.userid')
        .onDelete('CASCADE')
      table.string('token', 255).notNullable().unique()
      table.string('type', 80)
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
