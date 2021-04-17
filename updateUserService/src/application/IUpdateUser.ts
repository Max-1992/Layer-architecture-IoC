// Interface
import { IUserDto } from "./IUserDto";

export interface IUpdateUserService {
    update(id: string, user: IUserDto): Promise<void>
}