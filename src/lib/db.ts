import { PrismaClient } from '../app/generated/prisma';
// import { PrismaClient } from '@prisma/client';

if (process.env.NODE_ENV === "production") {
    globalThis.prisma = undefined;
}

// Prevent creating a new Prisma Client every time
// the function is called in development mode
declare global{
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;