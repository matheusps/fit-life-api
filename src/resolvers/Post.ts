export const from = (parent, args, context) =>
  context.prisma.post({ id: parent.id }).from()
