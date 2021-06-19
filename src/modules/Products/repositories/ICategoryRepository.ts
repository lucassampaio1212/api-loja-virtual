import Category from "../infra/typeorm/entities/Category";



export default interface ICategoryRepository {
    create(description: string): Promise<Category>;
    findByName(description: string): Promise<Category>;
}