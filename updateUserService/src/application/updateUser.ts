// Interface
import { IUpdateUserService } from "./IUpdateUser";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserDto } from "./IUserDto";
export default class UpdateUserService implements IUpdateUserService {

    constructor(private userRepository: IUserRepository) {}

    async update(id: string, userDto: IUserDto): Promise<void> {
        try {
            // Generate a copy of the received data.
            const user: IUserDto = { ...userDto };

            // Call the repository method to create new user.
            await this.userRepository.updateById(id, user);
            
        } catch (error) {
            console.error(error)
        }
    }

}