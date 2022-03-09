import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Marcas extends BaseSchema {
  protected tableName = 'marcas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('marcaid').primary()
      table.string('nombre')
      table.timestamps()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
