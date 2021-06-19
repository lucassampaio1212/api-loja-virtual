import Product from "@modules/Products/infra/typeorm/entities/Product";
import IProductsRepository from "@modules/Products/repositories/IProductsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    description: string;
    amount: number;
}


@injectable()
export default class CreateProductUseCase {
    constructor(
        @inject("ProductsRepositories")
        private productsRepository: IProductsRepository
    ){}

    public async execute({name,description,amount}:IRequest):Promise<Product>{
        const product = await this.productsRepository.create({
            name,
            amount,
            description
        });



        return product;
    }


}