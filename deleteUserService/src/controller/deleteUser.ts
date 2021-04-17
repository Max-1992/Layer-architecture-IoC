// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpDelete, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../config/constant/types"

// Express
import { Request, Response } from "express"

// Interface
import { IDeleteUserService } from "../application/IDeleteUser";

@controller('/api/v1/user')
export default class DeleteUserServiceController implements interfaces.Controller {

    constructor(@inject(TYPES.IDeleteUserService) private deleteUserService: IDeleteUserService) {}

    @httpDelete('/delete/:id')
    async deleteUser(@request() req: Request, @response() res: Response) {
       try {
            const { id } = req.params;
            await this.deleteUserService.delete(id);

            const message = `User data was successfully deleted.`;

            res.status(200).json({ ok: true, message });
       } catch (err) {
            res.status(400).json({error: err.message})
       }
    }

}
