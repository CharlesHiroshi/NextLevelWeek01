import knex from 'knex'
import path from 'path'

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true, // ← Evita a mensagem de erro da campos Nulos
})

export default connection
