// Interface
import { IGetUserService } from "./IGetUser";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserDto } from "./IUserDto";

export default class GetUserService implements IGetUserService {

    constructor(private userRepository: IUserRepository) {}

    async get(id: string): Promise<IUserDto> {
        const user = await this.userRepository.getById(id);
        return user;
    }
}