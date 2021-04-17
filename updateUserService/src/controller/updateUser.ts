// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpPut, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../config/constant/types"

// Express
import { Request, Response } from "express"

// Interface
import { IUpdateUserService } from "../application/IUpdateUser";
import { IUserDto } from "../application/IUserDto";
import UpdateUserServiceLocator from "../application/updateServiceLocator";


@controller("/api/v1/user")
export default class UpdateUserController implements interfaces.Controller {

    private readonly updateUserService: IUpdateUserService;

    constructor(@inject(TYPES.UpdateUserServiceLocator) private serviceLocator: UpdateUserServiceLocator) {
        this.updateUserService = this.serviceLocator.GetUpdateUserService();
    }

    @httpPut("/update/:id")
    public async createUser(@request() req: Request, @response() res: Response) {
        try {

            // Get id from path params
            const { id } = req.params

            // Get user data from request
            const userDto: IUserDto = req.body

            // Call the user creation service.
            await this.updateUserService.update(id, userDto)

            const message = `User data was updated successfully.`

            res.status(200).json({ ok: true, message })

        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }
}
