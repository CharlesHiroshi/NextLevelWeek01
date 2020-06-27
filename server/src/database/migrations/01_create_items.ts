// Criação da tabela items no databse.sqlite
// ↓ Import do módulo knex para gerenciamento do BD
import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('image').notNullable()
    table.string('title').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items')
}