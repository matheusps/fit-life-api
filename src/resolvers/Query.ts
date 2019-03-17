export const info = () => 'Just awessome API 👽'

export const users = (parent, args, context) => context.prisma.users()

export const posts = (parent, args, context) => context.prisma.posts()
