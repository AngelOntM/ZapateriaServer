import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Proveedores extends BaseSchema {
  protected tableName = 'proveedores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('proveedorid').primary()
      table.string('nombre')
      table.string('correo')
      table.integer('telefono')
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
