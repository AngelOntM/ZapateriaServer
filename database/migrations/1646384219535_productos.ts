import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Productos extends BaseSchema {
  protected tableName = 'productos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('productoid').primary()
      table.string('nombre')
      table.string('color')
      table.integer('existencias')
      table.decimal('precio')
      table
        .integer('tallaid')
        .unsigned()
        .references('tallas.tallaid')
        .onDelete('CASCADE')
      table
        .integer('marcaid')
        .unsigned()
        .references('marcas.marcaid')
        .onDelete('CASCADE')
      table
        .integer('categoriaid')
        .unsigned()
        .references('categorias.categoriaid')
        .onDelete('CASCADE')
      table.string('imagen')
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
