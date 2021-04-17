import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"


// Interface
import { IUpdateUserService } from "../application/IUpdateUser"
import { IUserRepository } from "../repository/IUserRepository"


// Class
import UpdateUserService from "../application/updateUser"
import { UserRepository } from "../repository/userRepository"


// Declare IoC
const container = new Container()

// set up bindings
container.bind<IUpdateUserService>(TYPES.IUpdateUserService).to(UpdateUserService)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)


export { container }