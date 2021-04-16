// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpPost, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../config/constant/types"

// Express
import { Request, Response } from "express"

// Interface
import { ICreateUserService } from "../application/ICreateUser";
import { IUserDto } from "../application/IUserDto";


@controller("/api/v1/user")
export default class createUserController implements interfaces.Controller {


    constructor(@inject(TYPES.ICreateUserService) private createUserService: ICreateUserService) {}

    @httpPost("/add")
    public async createUser(@request() req: Request, @response() res: Response) {
        try {

            // Get user data from request
            const userDto: IUserDto = req.body

            // Call the user creation service.
            const userCreated: IUserDto = await this.createUserService.create(userDto)

            res.status(200).json({ ok: true, userCreated })

        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }
}
