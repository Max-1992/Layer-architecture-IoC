// Inversify
import { injectable } from "inversify"

// Interface
import { IUserRepository } from "./IUserRepository"
import { IUserDto } from "../application/IUserDto"

// Class
import UserModel from "./models/user"

@injectable()
export class UserRepository implements IUserRepository {

    constructor() {}

    async getById(id: string): Promise<IUserDto> {
        // Db save Object collection Users.
        const user: IUserDto | any = await UserModel.findOne({ id });

        // Return document
        return user;
    }
        
}