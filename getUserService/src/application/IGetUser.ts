// Interface
import { IUserDto } from "./IUserDto";

export interface IGetUserService {
    get(id: string, idRepository: number): Promise<IUserDto>
}