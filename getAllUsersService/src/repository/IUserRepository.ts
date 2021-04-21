import { IUserDto } from "../application/IUserDto";

export interface IUserRepository {
    all (): Promise<IUserDto[]>
}