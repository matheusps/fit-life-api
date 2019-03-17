import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { secret, getUserId } from '../auth'

export const signup = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, secret)

  return {
    token,
    user,
  }
}

export const login = async (parent, args, context, info) => {
  const user = await context.prisma.user({ email: args.email })
  if (!user) throw new Error('🚫No such user found!')

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) throw new Error('🚫 Invalid password!')

  const token = jwt.sign({ userId: user.id }, secret)

  return {
    token,
    user,
  }
}

export const createPost = (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.createPost({
    content: args.content,
    from: { connect: { id: userId } },
  })
}
