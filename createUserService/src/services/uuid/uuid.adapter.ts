// Inversify
import { injectable } from "inversify";

// Libreria
import * as uuid from 'uuid'

// Interface
import { IGeneratorId } from './IGenerator'


@injectable()
export class UuidAdapter implements IGeneratorId {
    constructor() {}

    generate(): string {
        const id = uuid.v4()
        return id
    }
}