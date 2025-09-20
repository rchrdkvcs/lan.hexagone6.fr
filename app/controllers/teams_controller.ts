import type { HttpContext } from '@adonisjs/core/http'

export default class TeamsController {
  render({ inertia }: HttpContext) {
    return inertia.render('teams/index')
  }
}
