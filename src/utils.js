const APP_SECRET = 'f1t-l1f3-**@#$^&$**-v3ry-h4rd-S3cR3t'

const getUserId = context => {
  const Authorization = context.request.get('Authorization')
  if (!Authorization) throw new Error('Not authenticated')

  const token = Authorization.replace('Bearer', '')
  const { userId } = jwt.verify(token, APP_SECRET)

  return userId
}

export { APP_SECRET, getUserId }
