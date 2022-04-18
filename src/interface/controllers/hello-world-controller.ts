import { Request, Response } from "express";

export class HelloWorld {
    constructor() {}

    helloWorld(req: Request, res: Response){
        res.send('Hello Brasil').status(200)
    }
}