import { Category } from '@domain/models'
import { CategoryRepository } from '@infrastructure/repository';


describe('CategoryRepository', () => {
    describe('Given a category that should be stored', () => {
        describe('When the create method was called', () => {
            it('A new category element should be put on array', () => {
               
                const category = {
                    id: 'test',
                    name: 'sports car'
                } as Category

                const sut = new CategoryRepository()
                const result = sut.create(category)

                expect(result.id).toBe(category.id)
                expect(result.name).toBe(category.name)
                expect(result.createdAt).not.toBeNull()
            })
        })
    })
})