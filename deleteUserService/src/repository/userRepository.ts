// Inversify
import { injectable } from "inversify"

// Interface
import { IUserRepository } from "./IUserRepository"

// Class
import UserModel from "./models/user"

@injectable()
export class UserRepository implements IUserRepository {

    constructor() {}

    async deleteById(id: string): Promise<void> {
        // Delete Object collection Users.
        await UserModel.deleteOne({ id });
    }
        
}