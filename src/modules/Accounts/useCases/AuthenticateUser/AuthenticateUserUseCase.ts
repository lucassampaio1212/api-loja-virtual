import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import AppError from "@shared/errors/appError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";



interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
export default class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersReppository: IUsersRepository
    ){}

    public async execute({email,password}: IRequest):Promise<IResponse>{
        const user = await this.usersReppository.findByEmail(email);

        if(!user) {
            throw new AppError("Email or password incorrect!");
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath){
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({},"3db7b9aeaf8b7460d96f307b62d9fb04",{
            expiresIn: "1d",
            subject: user.id
        });

        const tokenReturn: IResponse = {
            user: {
              name: user.name,
              email: user.email
            },
            token
          }
      
          return tokenReturn
        
    }
}