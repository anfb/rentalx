import { Category } from "@domain/models";
import { CategoryRepository } from "@infrastructure/repository";

export class CreateCategoriesUseCase {
    constructor(private readonly categoryRepository: CategoryRepository = new CategoryRepository()) {
    }

    public createCategory(category: Category): Category {

        const addedCategory = this.categoryRepository.create(category)
        if(!addedCategory){
            return {} as Category
        }
        
        return addedCategory
    }
}