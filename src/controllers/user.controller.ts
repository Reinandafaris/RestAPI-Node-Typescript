import { Request, Response } from 'express'
import { getUserFromDB, getUserById } from '../services/user.service'
import { logger } from '../utils/logger'

export const getUser = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  if (id) {
    const user = await getUserById(id)
    if (user) {
      logger.info('Success get product data')
      return res.status(200).send({ status: true, statusCode: 200, data: user })
    } else {
      return res.status(200).send({ status: true, statusCode: 404, message: 'Data Not Found', data: {} })
    }
  } else {
    const user: any = await getUserFromDB()
    logger.info('Success get user data')
    return res.status(200).send({ status: true, statusCode: 200, data: user })
  }
}
