import { CategoryRepository } from "@infrastructure/repository";
import { CreateCategoriesUseCase } from '@application/use-case';
import { Category } from "@domain/models";

function makeSut() {
    const categoryRepository = new CategoryRepository()
    const sut = new CreateCategoriesUseCase(categoryRepository)
    return {
        sut,
        categoryRepository
    }
}

describe('CreateCategoriesUseCase', () => {
    describe('Given a category', () => {
        describe('When the createCategory method is called', () => {
            it('The categoryRepository should be call to add the new category and should return the category added', () => {
                const { sut, categoryRepository } = makeSut()
                const category = {
                    id: 'test',
                    name: 'sports car'
                } as Category
                
                jest.spyOn(categoryRepository, 'create')

                const result = sut.createCategory(category)

                expect(result.id).toBe(category.id)
                expect(categoryRepository.create).toHaveBeenCalledWith(category)
            })
        })
    })
})