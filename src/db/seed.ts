import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { questions } from './schema/questions.ts';
import { rooms } from './schema/rooms.ts';

// Create a schema without audioChunks since drizzle-seed doesn't support vector columns
const seedableSchema = { rooms, questions };

await reset(db, seedableSchema);

await seed(db, seedableSchema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 15,
      columns: {
        question: f.loremIpsum(),
        answer: undefined,
      },
    },
  };
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log('Database seeded');
