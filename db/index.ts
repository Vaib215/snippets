import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

const sql = postgres(process.env.POSTGRES_URI!);
const db = drizzle(sql, { schema });
export default db;
