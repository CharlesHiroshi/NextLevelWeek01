import express from 'express'
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

/*  index => listar 
    show => mostrar único registro
    create => criar
    update => atualizar
    delete => apagar
*/

routes.get('/items', itemsController.index)
routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes