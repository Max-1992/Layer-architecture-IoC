// Inversify
import { injectable, multiInject } from "inversify";

// Types
import { TYPES } from "../../config/constant/types";

// Interface
import { IUserRepositoryStrategy } from "./IUserRepository.strategy";
import { IUserRepository } from "../IUserRepository";

@injectable()
export class UserRepositoryStrategy implements IUserRepositoryStrategy {

    private readonly enabledStrategies: any = {
        mongo: 0,
        mongodb: 1 
    }

    constructor(@multiInject(TYPES.IUserRepository) private readonly userRepositories: IUserRepository[]) {}

    getRepository(strategy: string): IUserRepository {
        const strategySelected: number = this.enabledStrategies[strategy]
        const userRepository: IUserRepository = this.userRepositories[strategySelected]
        return userRepository
    }

}