import { Category } from '@domain/models'

export class CategoryRepository {

    private categoryRepository = [] as Category[]

    public create (category: Category): Category {
        category.createdAt = new Date()
        this.categoryRepository.push(category)
        return category
    }
}