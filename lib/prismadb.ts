import { PrismaClient } from '@prisma/client';

/**
 * This is for Next.js Hot Reloading (on every code change our code updates and reruns).
 * Prisma will create a bunch of new Prisma client instnaces on every code change, which will eventually error out.
 * This is a trick to save prisma clients on a global file. Global files are not affect by hot reloading.
 * We only do this in development.
 */
const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;
