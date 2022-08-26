import { Request, Response } from "express";
import { RESPONSE_TYPES } from "../config/enums";
import { UserRepository } from "../repositories/user.repositoy";
import { BaseController } from "./base.controller";

export class UserController extends BaseController {
    constructor(private userRepository: UserRepository) {
        super()
    }

    public async index(req: Request, res: Response): Promise<Response> {
        const users = await this.userRepository.listAll()
        return this.formatReponse({ res, data: users, type: RESPONSE_TYPES.SUCCESS })
    }

    public async show(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;

            const user = await this.userRepository.getByID(id)
            return this.formatReponse({
                res,
                data: user,
                type: RESPONSE_TYPES.SUCCESS
            })
        } catch (error) {
            return this.formatReponse({
                res,
                message: error as TypeError,
                type: RESPONSE_TYPES.ERROR
            })
        }
    }
}