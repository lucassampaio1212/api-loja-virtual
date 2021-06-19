import {Request, Response} from "express";
import { container } from "tsyringe";
import CreateCategoryUseCase from "./CreateCategoryUseCase";





export default class CreateCategoryController {



    public async handle(request: Request, response: Response):Promise<Response> {
        const {description} = request.body;

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

        const category = await createCategoryUseCase.execute({
            description
        });

        return response.status(201).json(category);

    }
}