// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IDeleteUserService } from "./IDeleteUser";
import { IUserRepository } from "../repository/IUserRepository";


@injectable()
export default class DeleteUserService implements IDeleteUserService {

    constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) {}

    async delete(id: string): Promise<void> {
        await this.userRepository.deleteById(id);
    }

}