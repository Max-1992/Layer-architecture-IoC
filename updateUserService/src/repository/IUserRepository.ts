// Interface
import { IUserDto } from "../application/IUserDto";

export interface IUserRepository {
    updateById(id: string, data: IUserDto): Promise<void>
}