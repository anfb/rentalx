import { HelloWorld } from "@interface/controllers";
import { Express, Router } from "express";

const helloWorldMessage = new HelloWorld()

export const setRoutes = (app: Express): void => {
    const router = Router()

    router.get('/helloWorld', helloWorldMessage.helloWorld.bind(helloWorldMessage))

    app.use('/rentalx-dev/rentalx', router)

    app.listen(3333, () => {
        console.log('running...')
    })
}

