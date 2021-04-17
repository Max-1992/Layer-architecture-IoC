import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"

// Interface
import { IDeleteUserService } from "../application/IDeleteUser"
import { IUserRepository } from "../repository/IUserRepository"

// Class
import DeleteUserService from "../application/deleteUser"
import { UserRepository } from "../repository/userRepository"

// Declare IoC
const container = new Container()

// set up bindings
container.bind<IDeleteUserService>(TYPES.IDeleteUserService).to(DeleteUserService)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)

export { container }