import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, OneToMany} from "typeorm"
import { User } from "./User"
import {Personajes} from "./Personajes"
import {Planetas} from "./Planetas"

@Entity()
export class Favoritos extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    personajesid: number

    @Column()
    planetasid: number

    @OneToOne(() => User, user => user.favoritos) // specify inverse side as a second parameter
    @JoinColumn()
    user: User;

    @OneToMany(() => Personajes, personajes => personajes.favoritos)
    personajes: Personajes[];

    @OneToMany(() => Planetas, planetas => planetas.favoritos)
    planetas: Planetas[];
}