// Interface
import { IUserRepository } from "../IUserRepository";

export interface IUserRepositoryStrategy {
    getRepository (strategy: string): IUserRepository
}