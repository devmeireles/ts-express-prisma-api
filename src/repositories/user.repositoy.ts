import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../entities/user.entity";
import { UserInterface } from "../interfaces/user.interface";

const prisma = new PrismaClient()


export class UserRepository implements UserInterface {
    get(): Promise<Record<string, any>> {
        throw new Error("Method not implemented.");
    }

    async getByID(id: any): Promise<any> {
        return await prisma.user.findUniqueOrThrow({
            where: {
                'id': Number(id)
            }
        })
    }

    async listAll(): Promise<Record<string, any>> {
        return await prisma.user.findMany()
    }

    create(user: Record<string, any>): Promise<Record<string, any>> {
        throw new Error("Method not implemented.");
    }
}