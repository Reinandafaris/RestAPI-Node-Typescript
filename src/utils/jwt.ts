import { valid } from 'joi'
import jwt from 'jsonwebtoken'
// import CONFIG from '../config/environment'

export const signJWT = (payload: Object, options?: jwt.SignOptions | undefined) => {
  const jwt_private = process.env.jwt_private
  return jwt.sign(payload, jwt_private!, {
    ...(options && options),
    algorithm: 'HS256'
  })
}

export const verifyJWT = (token: string) => {
  const jwt_public = process.env.jwt_public!
  try {
    const decoded = jwt.verify(token, jwt_public)
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt is expired or not eligible to use',
      decoded: null
    }
  }
}
