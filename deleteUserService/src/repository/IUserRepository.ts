export interface IUserRepository {
    deleteById(id: string): Promise<void>
}