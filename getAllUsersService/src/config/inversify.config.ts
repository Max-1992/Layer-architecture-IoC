import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constants/types"

// Interface
import { IGetAllUsersService } from "../application/IGetAllUsers"
import { IUserRepository } from "../repository/IUserRepository"

// Class
import GetAllUserService from "../application/getAllUsers"
import { UserRepository } from "../repository/userRepository"

// Declare IoC
const container = new Container()

// set up bindings
container.bind<IGetAllUsersService>(TYPES.IGetAllUsers).to(GetAllUserService)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)


export { container }