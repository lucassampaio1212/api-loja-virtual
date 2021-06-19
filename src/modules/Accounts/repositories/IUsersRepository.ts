import ICreateUsersDTO from "../dtos/ICreateUsersDTO";
import User from "../infra/typeorm/entities/User";


export default interface IUsersRepository {
    create({name,email,password}: ICreateUsersDTO): Promise<User>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    all(): Promise<User[]>;
}