// Inversify 
import { injectable } from 'inversify'

// Interface
import { IUserDto } from "../application/IUserDto";
import { IUserRepository } from "./IUserRepository";

// Model DB
import UserModel from "./models/user";

@injectable()
export class UserRepository implements IUserRepository {
    async all(): Promise<IUserDto[]> {
       const users = await UserModel.find();
       return users;
    }
    
}