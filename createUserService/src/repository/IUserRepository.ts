// Interface
import { IUserDto } from "../application/IUserDto";

// Class
import { User } from "../entities/user";

export interface IUserRepository {
    save(user: User): Promise<IUserDto>
}