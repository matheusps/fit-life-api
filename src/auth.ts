import jwt from 'jsonwebtoken'

interface Decoded {
  userId: string
  iat: number
}

export const secret = 'f1t-l1f3-**@#$^&$**-v3ry-h4rd-S3cR3t'

export const getUserId = context => {
  const Authorization = context.request.get('Authorization')
  if (!Authorization) throw new Error('🚫Not authenticated')

  const token = Authorization.replace('Bearer ', '')
  const { userId } = <Decoded>jwt.verify(token, secret)

  return userId
}
