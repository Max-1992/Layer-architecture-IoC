// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IGetUserService } from "./IGetUser";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserDto } from "./IUserDto";


@injectable()
export default class GetUserService implements IGetUserService {

    constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) {}

    async get(id: string): Promise<IUserDto> {
        const user = await this.userRepository.getById(id);
        return user;
    }
}