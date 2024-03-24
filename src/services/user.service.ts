import { logger } from '../utils/logger'
import userModel from '../models/user.model'

export const getUserFromDB = async () => {
  return await userModel
    .find()
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Cannot get data from DB')
      logger.error(error)
    })
}

export const getUserById = async (id: String) => {
  return await userModel.findOne({ user_id: id })
}
