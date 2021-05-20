import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany} from "typeorm"
import {Favoritos} from "./Favoritos"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido:string

    @Column()
    edad:number

    @Column()
    país:string

    @Column()
    ciudad:string

    @Column()
    mail:string

    @OneToOne(() => Favoritos, favoritos => favoritos.user) // specify inverse side as a second parameter
    favoritos: Favoritos;
}
