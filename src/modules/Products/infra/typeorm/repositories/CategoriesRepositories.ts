import ICategoryRepository from "@modules/Products/repositories/ICategoryRepository";
import { getRepository, Repository } from "typeorm";
import Category from "../entities/Category";




export default class CategoriesRepositories implements ICategoryRepository {
    private repository: Repository<Category>

    constructor(){
        this.repository = getRepository(Category);
    }
    async findByName(description: string): Promise<Category> {
        const category = await this.repository.findOne({description});
        return category;
    }


    async create(description: string): Promise<Category> {
        const category = this.repository.create({
            description,
        });

        await this.repository.save(category);

        return category;
    }


     
}