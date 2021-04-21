import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constant/types"


// Interface
import { ICreateUserService } from "../application/ICreateUser"
import { IUserRepository } from "../repository/IUserRepository"
import { IGeneratorId } from "../services/uuid/IGenerator"

// Class
import CreateUserService from "../application/createUser"
import { UserRepository } from "../repository/userRepository"
import { UuidAdapter } from "../services/uuid/uuid.adapter"

// Declare IoC
const container = new Container()

// set up bindings
container.bind<ICreateUserService>(TYPES.ICreateUserService).to(CreateUserService)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)
container.bind<IGeneratorId>(TYPES.IGeneratorId).to(UuidAdapter)

export { container }