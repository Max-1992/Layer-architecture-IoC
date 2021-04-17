import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"


// Interface
import { IGetUserService } from '../application/IGetUser'
import { IUserRepository } from "../repository/IUserRepository"


// Class
import GetUserServiceLocator from "../application/getUserLocator"
import { UserRepository } from "../repository/userRepository"

// Declare IoC
const container = new Container()

// set up bindings
container.bind<GetUserServiceLocator>(TYPES.GetUserServiceLocato).to(GetUserServiceLocator)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)

export { container }