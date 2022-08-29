/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response, Router } from "express";
import { UserController } from "@controllers/user.controller";
import { UserRepository } from "@repositories/user.repositoy";

import {
    ErrorReponseType,
    SuccessReponseType,
} from "@localtypes/response.type";

/**
 * A LoginReference type
 * @typedef {object} LoginReference
 * @property {string} email.required - The email
 * @property {string} password.required - The password
 */

const authRouter = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

/**
 * POST /auth/login
 * @summary Does a login action
 * @tags auth
 * @param {LoginReference} request.body.required - login info
 * @return {SuccessReponseType} 200 - success response
 * @return {ErrorReponseType} 400 - Bad request response
 */
authRouter.post("/login", (req: Request, res: Response) => {
    return userController.login(req, res);
});

export { authRouter }