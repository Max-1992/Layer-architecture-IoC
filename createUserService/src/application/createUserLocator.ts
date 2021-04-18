// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IUserRepository } from "../repository/IUserRepository";

// Class
import CreateUserService from "./createUser";

@injectable()
export default class CreateUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetCreateUserService() {
        return new CreateUserService(this.userRepository);
    }
}
