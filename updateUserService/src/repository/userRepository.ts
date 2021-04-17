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

    async updateById(id: string, user: IUserDto): Promise<void> {
        await UserModel.updateOne({ id }, { $set: user });
    }
        
}