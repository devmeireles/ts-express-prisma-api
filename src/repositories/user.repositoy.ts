import { PrismaClient } from "@prisma/client";
import { UserInterface } from "@interfaces/user.interface";
import { UserEntity } from "@entities/user.entity";

const prisma = new PrismaClient();

export class UserRepository implements UserInterface {
  get(): Promise<Record<string, any>> {
    throw new Error("Method not implemented.");
  }

  async getByID(id: any): Promise<any> {
    return await prisma.user.findUniqueOrThrow({
      where: {
        id: Number(id),
      },
    });
  }

  async listAll(): Promise<Record<string, any>> {
    return await prisma.user.findMany();
  }

  async create(user: UserEntity): Promise<Record<string, any>> {
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
  }
}
