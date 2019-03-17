const info = () => {
  return 'Just awessome API 👽'
}

const users = (parent, args, context) => {
  return context.prisma.users()
}

export { info, users }
