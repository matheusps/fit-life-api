const info = () => {
  return 'Just awessome API 👽'
}

const users = (parent: any, args: any, context: any) => {
  return context.prisma.users()
}

export { info, users }
