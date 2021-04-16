// Interface
import { IUserDto } from "./IUserDto";

export interface ICreateUserService {
    create(user: IUserDto): Promise<IUserDto>
}