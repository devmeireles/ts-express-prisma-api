import { Request, Response } from "express";
import { RESPONSE_TYPES } from "@config/enums";
import { UserRepository } from "@repositories/user.repositoy";
import { BaseController } from "@controllers/base.controller";
import { UserEntity } from "@entities/user.entity";

export class UserController extends BaseController {
  constructor(private userRepository: UserRepository) {
    super();
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const users = await this.userRepository.listAll();
    return this.formatReponse({
      res,
      data: users,
      type: RESPONSE_TYPES.SUCCESS,
    });
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const user = await this.userRepository.getByID(id);
      return this.formatReponse({
        res,
        data: user,
        type: RESPONSE_TYPES.SUCCESS,
      });
    } catch (error) {
      return this.formatReponse({
        res,
        message: error as TypeError,
        type: RESPONSE_TYPES.ERROR,
      });
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      const userAlreadyExists = await this.userRepository.getByEmail(email);
      if (userAlreadyExists) throw new Error("User already exists.");

      const user = new UserEntity({
        name,
        email,
        password,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      });

      const newUser = await this.userRepository.create(user);

      return this.formatReponse({
        res,
        data: newUser,
        type: RESPONSE_TYPES.SUCCESS,
      });
    } catch (error) {
      return this.formatReponse({
        res,
        message: error as TypeError,
        type: RESPONSE_TYPES.ERROR,
      });
    }
  }

  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const currentUser = await this.userRepository.getByEmail(email);
      if (!currentUser) throw new Error("User not found");

      const user = new UserEntity({ ...currentUser })

      const hashIsTrue: boolean = await user.compareHash(password);
      if (!hashIsTrue) throw new Error("Wrong login data");

      const token: string = user.generateToken();

      return this.formatReponse({
        res,
        data: { ...user, token },
        type: RESPONSE_TYPES.SUCCESS,
      });

    } catch (error) {

      return this.formatReponse({
        res,
        message: error as TypeError,
        type: RESPONSE_TYPES.ERROR,
      });
    }
  }
}
