import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import Category from "./Category";

@Entity("products")
class Product{
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @Column()
    category_id: string;

    @Column()
    amount: number;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}
export default Product;