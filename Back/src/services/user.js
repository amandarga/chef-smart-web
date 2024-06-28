import databaseConnection from '../utils/database'
import User from '../models/user'

// o que são essas funções?
// são Services responsáveis por trabalhar com os dados que iremos receber no backend!
export const listUsers = async () => {
    await databaseConnection()
    const users = await User.find()
    return users
}

export const createUser = async (user) => {
    await databaseConnection()
    const createdUser = await User.create(user)
    return createdUser
}