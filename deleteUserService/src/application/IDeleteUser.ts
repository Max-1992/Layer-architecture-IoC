export interface IDeleteUserService {
    delete(id: string): Promise<void>
}