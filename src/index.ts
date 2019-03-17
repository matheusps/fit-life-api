import { GraphQLServer } from 'graphql-yoga'
import { prisma } from '../prisma/prisma-client'

import * as Query from './resolvers/Query'
import * as Mutation from './resolvers/Mutation'
import * as User from './resolvers/User'
import * as Post from './resolvers/Post'

const resolvers = {
  Query,
  Mutation,
  User,
  Post,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({ ...request, prisma }),
})

server.start(() =>
  console.log(`🔥 Server is running on http://localhost:4000 🔥`)
)
