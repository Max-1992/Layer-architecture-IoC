// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpGet, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../config/constant/types"

// Express
import { Request, Response } from "express"

// Interface
import { IGetUserService } from "../application/IGetUser";
import { IUserDto } from "../application/IUserDto";
import GetUserServiceLocator from "../application/getUserLocator";


@controller('/api/v1/user')
export default class GetUserController implements interfaces.Controller {

    private readonly getUserService: IGetUserService;

    constructor(@inject(TYPES.GetUserServiceLocato) serviceLocator: GetUserServiceLocator ) {
        this.getUserService = serviceLocator.GetUserService()
    }

    @httpGet('/:id')
    async getUser(@request() req: Request, @response() res: Response) {
        try {
            // Get userId from request
            const { id } = req.params;
            const user: IUserDto = await this.getUserService.get(id);

            res.status(200).json({ ok: true, user });
        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }

}