// Interface
import { IUserDto } from "./IUserDto";

export interface IGetUserService {
    get(id: string): Promise<IUserDto>
}