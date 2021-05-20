import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"
import {Favoritos} from "./Favoritos"

@Entity()
export class Planetas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    Name: string

    @Column()
    BirthYear: string

    @Column()
    Gender: string

    @Column()
    Height: number

    @Column()
    SkinColor: string

    @Column()
    EyeColor: string

    @ManyToOne(() => Favoritos, favoritos => favoritos.personajes)
    favoritos: Favoritos;
}