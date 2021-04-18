// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IUserRepository } from "../repository/IUserRepository";

// Class
import UpdateUserService from "./updateUser";

@injectable()
export default class UpdateUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetUpdateUserService() {
        return new UpdateUserService(this.userRepository);
    }
}
