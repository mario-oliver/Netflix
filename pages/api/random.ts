import { NextApiRequest, NextApiResponse } from 'next';

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(400).end();

  try {
    //check if we are logged in on the server side
    await serverAuth(req);

    const movieCount = await prismadb.movie.count();
    const randomIdx = Math.floor(Math.random() * movieCount);
    //use pagination to get the algorithm to work
    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIdx,
    });
    return res.status(200).json(randomMovie[0]);
  } catch (error) {
    console.log(error);
  }
}
