// Interface
import { IUserDto } from "./IUserDto";

export interface IGetAllUsersService {
    getAll (): Promise<IUserDto[]>
}