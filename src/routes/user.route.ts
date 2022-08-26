import { Request, Response, Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { UserRepository } from '../repositories/user.repositoy';

const userRouter = Router();
const userRepository = new UserRepository()
const userController = new UserController(userRepository)

userRouter.get("/", (req: Request, res: Response) => {
    return userController.index(req, res)
});

userRouter.get("/:id", (req: Request, res: Response) => {
    return userController.show(req, res)
});


export { userRouter };
