// Inversify Express
import { controller, httpGet, interfaces, request, response } from "inversify-express-utils"

// Inversify 
import { inject } from 'inversify'

// Types
import { TYPES } from '../config/constants/types'

// Express
import { Request, Response } from "express"

// Interface
import { IGetAllUsersService } from "../application/IGetAllUsers";

@controller('/api/v1/user')
export default class GetAllUsersController implements interfaces.Controller {

    constructor( @inject(TYPES.IGetAllUsers) private readonly getAllUserService: IGetAllUsersService ) {}

    @httpGet('/all')
    async getAllUsers(@request() req: Request, @response() res: Response ) {
        const users = await this.getAllUserService.getAll();
        res.status(200).json({ ok: true, data: users });
    }

}