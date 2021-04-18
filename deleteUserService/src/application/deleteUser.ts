// Interface
import { IDeleteUserService } from "./IDeleteUser";
import { IUserRepository } from "../repository/IUserRepository";
export default class DeleteUserService implements IDeleteUserService {

    constructor(private userRepository: IUserRepository) {}

    async delete(id: string): Promise<void> {
        await this.userRepository.deleteById(id);
    }

}