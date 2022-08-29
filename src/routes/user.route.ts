/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response, Router } from "express";
import { UserController } from "@controllers/user.controller";
import { UserRepository } from "@repositories/user.repositoy";

import {
  ErrorReponseType,
  SuccessReponseType,
} from "@localtypes/response.type";
import { UserEntity } from "@src/entities/user.entity";

const userRouter = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

/**
 * GET /user
 * @summary Returns a list of users
 * @tags user
 * @return {SuccessReponseType} 200 - success response
 * @return {ErrorReponseType} 400 - Bad request response
 */
userRouter.get("/", (req: Request, res: Response) => {
  return userController.index(req, res);
});

/**
 * GET /user/{id}
 * @summary Gets an user by id
 * @tags user
 * @param {string} id.path - id param description
 * @return {SuccessReponseType} 200 - success response
 * @return {ErrorReponseType} 400 - Bad request response
 */
userRouter.get("/:id", (req: Request, res: Response) => {
  return userController.show(req, res);
});

/**
 * POST /user
 * @summary Creates an user
 * @tags user
 * @param {UserEntity} request.body.required - user info
 * @return {object} 200 - user response
 * @return {SuccessReponseType} 201 - success response
 * @return {ErrorReponseType} 400 - Bad request response
 */
userRouter.post("/", (req: Request, res: Response) => {
  return userController.save(req, res);
});

export { userRouter };
