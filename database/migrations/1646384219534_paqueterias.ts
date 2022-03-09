import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Paqueterias extends BaseSchema {
  protected tableName = 'paqueterias'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('paqueteriaid').primary()
      table.string('nombre')
      table.integer('telefono', 10)
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
