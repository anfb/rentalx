import { CreateCategoriesUseCase } from "@application/use-case";
import { NextFunction, Request, Response } from "express";

export class CreateCategoriesController {
    constructor(private readonly createCategoryUseCase: CreateCategoriesUseCase = new CreateCategoriesUseCase()) {
    }

    public createCategory(request: Request, response: Response, next: NextFunction): void {
        const category = request.body  
        if(category){
            const addedCategory = this.createCategoryUseCase.createCategory(category)
            response.json(addedCategory).status(200)
        }
    }
}