import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"

// Interface
import { IDeleteUserService } from "../application/IDeleteUser"
import { IUserRepository } from "../repository/IUserRepository"

// Class
import { UserRepository } from "../repository/userRepository"
import DeleteUserServiceLocator from "../application/deleteServiceLocator"

// Declare IoC
const container = new Container()

// set up bindings
container.bind<DeleteUserServiceLocator>(TYPES.DeleteUserServiceLocator).to(DeleteUserServiceLocator)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)

export { container }