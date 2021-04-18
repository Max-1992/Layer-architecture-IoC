// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IUserRepository } from "../repository/IUserRepository";

// Class
import GetUserService from "./getUser";

@injectable()
export default class GetUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetUserService() {
        return new GetUserService(this.userRepository);
    }
}