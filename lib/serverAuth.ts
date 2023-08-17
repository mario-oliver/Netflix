import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prismadb from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

//use serverAuth in api controllers, and we're going to pass in teh request parameter that will hold the JWT token which the get session can then use to get teh logged in user
const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) throw new Error('Not signed in');

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!currentUser) throw new Error('Not signed in');

  return { currentUser };
};

export default serverAuth;
