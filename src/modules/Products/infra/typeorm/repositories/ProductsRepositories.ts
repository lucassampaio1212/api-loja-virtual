import ICreateProductsDTO from "@modules/Products/dtos/ICreateProductsDTO";
import IProductsRepository from "@modules/Products/repositories/IProductsRepository";
import { getRepository, Repository } from "typeorm";
import Product from "../entities/Product";





export default class ProductsRepositories implements IProductsRepository {
    private repository: Repository<Product>

    constructor(){
        this.repository = getRepository(Product);
    }
    async findById(id: string): Promise<Product> {
        const productId = await this.repository.findOne(id);
        return productId;
    }
   async create({ name, description, amount }: ICreateProductsDTO): Promise<Product> {
       const product = this.repository.create({
            name,
            amount,
            description
        });

        await this.repository.save(product);

        return product       
    }

}