import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', async () => {
        const rooms = schema.rooms;
        const results = await db.select({
            id: rooms.id,
            name: rooms.name,
        }).from(rooms).orderBy(rooms.createdAt);

        return results;
    })
}