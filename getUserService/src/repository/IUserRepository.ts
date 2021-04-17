// Interface
import { IUserDto } from "../application/IUserDto";

export interface IUserRepository {
    getById(id: string): Promise<IUserDto>
}