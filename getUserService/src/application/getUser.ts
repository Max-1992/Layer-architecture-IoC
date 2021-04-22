// Inversify
import { inject, injectable, multiInject } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IGetUserService } from "./IGetUser";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserDto } from "./IUserDto";


@injectable()
export default class GetUserService implements IGetUserService {

    constructor(@multiInject(TYPES.IUserRepository) private userRepository: IUserRepository[]) {}

    async get(id: string, idRepository: number): Promise<IUserDto> {
        const user = await this.userRepository[idRepository].getById(id);
        return user;
    }
}