// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IUserRepository } from "../repository/IUserRepository";

// Class
import DeleteUserService from "./deleteUser";

@injectable()
export default class DeleteUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetDeleteUserService() {
        return new DeleteUserService(this.userRepository);
    }
}
