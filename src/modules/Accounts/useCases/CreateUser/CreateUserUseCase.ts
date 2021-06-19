import User from "@modules/Accounts/infra/typeorm/entities/User";
import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import AppError from "@shared/errors/appError";
import {hash} from "bcryptjs";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
export default class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}


    public async execute({name,email,password}: IRequest):Promise<User>{
        const checkUserEmailExists = await this.usersRepository.findByEmail(email);

        if(checkUserEmailExists) {
            throw new AppError("Users Already Exists!")
        }

        const passwordHash = await hash(password, 8);

        const createUser = await this.usersRepository.create({
            name,
            email,
            password: passwordHash
        });

        return createUser;
    }
}