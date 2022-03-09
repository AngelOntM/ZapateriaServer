import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tallas extends BaseSchema {
  protected tableName = 'tallas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('tallaid')
      table.decimal('talla')
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
