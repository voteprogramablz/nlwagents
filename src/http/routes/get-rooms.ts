import { count, eq } from 'drizzle-orm';
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    const rooms = schema.rooms;
    const results = await db
      .select({
        id: rooms.id,
        name: rooms.name,
        createdAt: rooms.createdAt,
        questionsCount: count(schema.questions.id)
      })
      .from(rooms)
      .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
      .groupBy(rooms.id)
      .orderBy(rooms.createdAt);

    return results;
  });
};