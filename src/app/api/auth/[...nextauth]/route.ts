//source : https://www.youtube.com/watch?v=v6TPcU23wP8

import NextAuth from 'next-auth';
import { authOptions } from './option';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
