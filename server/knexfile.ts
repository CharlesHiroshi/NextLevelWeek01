// knexfile.ts para configuração do Knex gerenciar as ações do BD
// ↓ Import do módulo Path para resolver o caminho para o Knex
import path from 'path'

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true, // ← Evita a mensagem de erro da campos Nulos
}