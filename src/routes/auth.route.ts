/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response, Router } from "express";
import { UserController } from "@controllers/user.controller";
import { UserRepository } from "@repositories/user.repositoy";

import {
    ErrorReponseType,
    SuccessReponseType,
} from "@localtypes/response.type";
import { UserEntity } from "@src/entities/user.entity";

const authRouter = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

/**
 * POST /auth/login
 * @summary Does a login action
 * @tags auth
 * @return {SuccessReponseType} 200 - success response
 * @return {ErrorReponseType} 400 - Bad request response
 */
authRouter.post("/login", (req: Request, res: Response) => {
    return userController.login(req, res);
});

export { authRouter }