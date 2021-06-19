import ICreateProductDTO from "../dtos/ICreateProductsDTO";
import Product from "../infra/typeorm/entities/Product";




export default interface IProductsRepository {
    create({name,description,amount}: ICreateProductDTO):Promise<Product>
    findById(id: string): Promise<Product>
}