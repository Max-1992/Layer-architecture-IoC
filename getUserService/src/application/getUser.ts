// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IGetUserService } from "./IGetUser";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserDto } from "./IUserDto";
import { IUserRepositoryStrategy } from "../repository/strategy/IUserRepository.strategy";


@injectable()
export default class GetUserService implements IGetUserService {

    constructor(@inject(TYPES.IUserRepositoryStrategy) private readonly userRepositoryStrategy: IUserRepositoryStrategy) {}

    async get(id: string, idRepository: string): Promise<IUserDto> {
        const userRepository: IUserRepository = this.userRepositoryStrategy.getRepository(idRepository)
        const user = await userRepository.getById(id)
        return user;
    }
}

