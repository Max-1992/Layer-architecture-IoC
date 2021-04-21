// Inversify 
import { injectable, inject } from 'inversify'

// Types
import { TYPES } from '../config/constants/types'

// Interface
import { IUserRepository } from "../repository/IUserRepository";
import { IGetAllUsersService } from "./IGetAllUsers";
import { IUserDto } from "./IUserDto";

@injectable()
export default class GetAllUserService implements IGetAllUsersService {

    constructor( @inject(TYPES.IUserRepository) private readonly userRepository: IUserRepository) {}

    async getAll(): Promise<IUserDto[]> {
        const users = await this.userRepository.all()
        return users;
    }

}