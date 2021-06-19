import ICreateUsersDTO from "@modules/Accounts/dtos/ICreateUsersDTO";
import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";



export default class UsersRepositories implements IUsersRepository {
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User);
    }
   async create({ name, email, password }: ICreateUsersDTO): Promise<User> {
        const user = this.repository.create({
            name,
            email,
            password
        });

        await this.repository.save(user);

        return user;
    }
   async findById(id: string): Promise<User> {
        const userId = await this.repository.findOne(id);

        return userId;
    }
   async findByEmail(email: string): Promise<User> {
        const userEmail = await this.repository.findOne({email});

        return userEmail;
    }
   async all(): Promise<User[]> {
        const user = await this.repository.find();

        return user;
    }


    
}