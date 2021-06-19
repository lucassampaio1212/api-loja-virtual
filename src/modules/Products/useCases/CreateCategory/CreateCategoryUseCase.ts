import Category from "@modules/Products/infra/typeorm/entities/Category";
import ICategoryRepository from "@modules/Products/repositories/ICategoryRepository";
import AppError from "@shared/errors/appError";


interface IRequest {
    description: string;
}

export default class CreateCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    public async execute({description}: IRequest):Promise<Category>{
        const categoryExists = await this.categoryRepository.findByName(description);

        if(categoryExists){
            throw new AppError("Category Already Exists.");
        }

        const category = this.categoryRepository.create(description);

        return category;
    }
}