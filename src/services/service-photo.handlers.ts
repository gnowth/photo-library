import { rest } from 'msw'

import { photos } from './service-photo.fixtures'

const handlersServicePhoto = [rest.get('/images.json', (req, res, ctx) => res(ctx.json(photos)))]

export default handlersServicePhoto
