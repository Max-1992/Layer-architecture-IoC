import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"


// Interface
import { IUserRepository } from "../repository/IUserRepository"

// Class
import CreateUserServiceLocator from "../application/createUserLocator"
import { UserRepository } from "../repository/userRepository"

// Declare IoC
const container = new Container()

// set up bindings
container.bind<CreateUserServiceLocator>(TYPES.CreateUserServiceLocator).to(CreateUserServiceLocator)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)

export { container }