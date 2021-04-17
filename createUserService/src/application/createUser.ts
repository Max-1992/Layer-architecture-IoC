
// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { ICreateUserService } from "./ICreateUser";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserDto } from "./IUserDto";

// Class
import { User } from "../entities/user";

// Dependencies
import { IGeneratorId } from "../services/uuid/IGenerator";

@injectable()
export default class CreateUserService implements ICreateUserService {


    constructor(
        @inject(TYPES.IUserRepository) private userRepository: IUserRepository,
        @inject(TYPES.IGeneratorId) private generatorId: IGeneratorId,
        ) {}

    public async create(userDto: IUserDto): Promise<IUserDto> {
        try {
            // Generate a copy of the received data.
            const userDTO: IUserDto = { ...userDto };

            // Create a unique Id for our user.
            userDTO.id = this.generatorId.generate();

            // Create a Date High user.
            userDTO.registrationDate = new Date();
    
            // Capture the data sent by the request body.
            let user = new User(userDTO);

            // Call the repository method to create new user.
            const userCreated: IUserDto = await this.userRepository.save(user)

            if (!userCreated) {
                throw Error("We could not create the user")
            }
    
            return userCreated
            
        } catch (error) {
            console.error(error)
        }
    }

}