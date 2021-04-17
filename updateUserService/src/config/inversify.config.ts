import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"


// Interface
import { IUpdateUserService } from "../application/IUpdateUser"
import { IUserRepository } from "../repository/IUserRepository"


// Class
import UpdateUserServiceLocator from "../application/updateServiceLocator"
import { UserRepository } from "../repository/userRepository"


// Declare IoC
const container = new Container()

// set up bindings
container.bind<UpdateUserServiceLocator>(TYPES.UpdateUserServiceLocator).to(UpdateUserServiceLocator)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)


export { container }