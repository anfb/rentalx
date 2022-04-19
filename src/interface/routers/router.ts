import { HelloWorld } from "@interface/controllers";
import { CreateCategoriesController } from "@interface/controllers/create-categories-controller";
import { Express, Router } from "express";

const helloWorldMessage = new HelloWorld()
const createCategoriesController = new CreateCategoriesController()

export const setRoutes = (app: Express): void => {
    const router = Router()

    router.get('/helloWorld', helloWorldMessage.helloWorld.bind(helloWorldMessage))
    router.post('/categories', createCategoriesController.createCategory.bind(createCategoriesController))

    app.use('/rentalx-dev/rentalx', router)

    app.listen(3333, () => {
        console.log('running...')
    })
}

