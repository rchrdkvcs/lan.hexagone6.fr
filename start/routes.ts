/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TeamsController = () => import('#controllers/teams_controller')

router.get('/teams', [TeamsController, 'render'])
