// Inversify
import { injectable } from "inversify"

// Interface
import { IUserRepository } from "./IUserRepository"
import { IUserDto } from "../application/IUserDto"

@injectable()
export class UserMongoRepository implements IUserRepository {

    constructor() {}

    public async getById(id: string): Promise<IUserDto> {
        throw new Error('NOT IMPLEMENT METHOD!')
    }
        
}