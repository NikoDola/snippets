import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Load environment variables from .env.local in development
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: ".env.local" });
}

// Log the DATABASE_URL
console.log("DATABASE_URL:", process.env.DATABASE_URL);

// Initialize PrismaClient with the DATABASE_URL
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export { prisma as db };
