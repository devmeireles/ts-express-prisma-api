import { UserEntity } from "@entities/user.entity";

export interface UserInterface {
  listAll(): Promise<Record<string, any>>;
  get(): Promise<Record<string, any>>;
  getByID(id: unknown): Promise<UserEntity>;
}
