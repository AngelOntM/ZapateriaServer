import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Compras extends BaseSchema {
  protected tableName = 'compras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('compraid').primary()
      table.date('fecha')
      table
        .integer('proveedorid')
        .unsigned()
        .references('proveedores.proveedorid')
        .onDelete('CASCADE')
      table
        .integer('paqueteriaid')
        .unsigned()
        .references('paqueterias.paqueteriaid')
        .onDelete('CASCADE')
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
