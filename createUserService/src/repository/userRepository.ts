// Inversify
import { injectable } from "inversify"

// Interface
import { IUserRepository } from "./IUserRepository"
import { IUserDto } from "../application/IUserDto"

// Class
import { User } from "../entities/user"
import UserModel from "./models/user"

@injectable()
export class UserRepository implements IUserRepository {

    constructor() {}

    async save(user: User): Promise<IUserDto> {

        // Create User Object
        const newUser = new UserModel(user)

        // Db save Object collection Users.
        const userCreated: IUserDto = await newUser.save()

        // Return document
        return userCreated;
    }
        
}