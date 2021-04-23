import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"

// Interface
import { IGetUserService } from '../application/IGetUser'
import { IUserRepository } from "../repository/IUserRepository"
import { IUserRepositoryStrategy } from "../repository/strategy/IUserRepository.strategy"

// Class
import getUserService from '../application/getUser'
import { UserRepository } from "../repository/userRepository"
import { UserMongoRepository } from "../repository/userMongoRepository"
import { UserRepositoryStrategy } from "../repository/strategy/userRepository.strategy"

// Declare IoC
const container = new Container()

// SET UP BINDINGS

// Service
container.bind<IGetUserService>(TYPES.IGetUserService).to(getUserService)

// Repositories
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserMongoRepository)
container.bind<IUserRepositoryStrategy>(TYPES.IUserRepositoryStrategy).to(UserRepositoryStrategy)

export { container }