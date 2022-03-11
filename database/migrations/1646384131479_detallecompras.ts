import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Detallecompras extends BaseSchema {
  protected tableName = 'detallecompras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('detalleid').primary()
      table
        .integer('compraid')
        .unsigned()
        .references('compras.compraid')
        .onDelete('CASCADE')
      table.integer('producto')
      table.integer('cantidad')
      table.decimal('precio')
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
