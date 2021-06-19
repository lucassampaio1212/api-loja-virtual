import UsersRepositories from "@modules/Accounts/infra/typeorm/repositories/UsersRepositories";
import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import CategoriesRepositories from "@modules/Products/infra/typeorm/repositories/CategoriesRepositories";
import ProductsRepositories from "@modules/Products/infra/typeorm/repositories/ProductsRepositories";
import ICategoryRepository from "@modules/Products/repositories/ICategoryRepository";
import IProductsRepository from "@modules/Products/repositories/IProductsRepository";
import {container} from "tsyringe";



container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepositories
);

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepositories
);

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepositories
);
