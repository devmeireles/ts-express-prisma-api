import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import { userRouter } from './routes/user.route'

dotenv.config()

class App {
    public express: express.Application
    public connection: PrismaClient

    constructor() {
        this.express = express()
        this.connection = new PrismaClient()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    public getConnection() {
        return this.connection;
    }

    private routes(): void {
        this.express.use('/user', userRouter)
    }
}

export default new App().express