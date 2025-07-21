import { audioChunks } from "./audio-chunks.ts";
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

// Barrel file -> arquivo pra exportar todos os outros arquivos desse contexto
export const schema = {
    rooms,
    questions,
    audioChunks
}