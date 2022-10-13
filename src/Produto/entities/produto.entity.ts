import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tb_produto' })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 45, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ nullable: false })
    quantidade: number;

    @IsNotEmpty()
    @Column({ nullable: false})
    data_vec: Date;

    @IsNotEmpty()
    @Column({ nullable: false })
    preco: number;

}

