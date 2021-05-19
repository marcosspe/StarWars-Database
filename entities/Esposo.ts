import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn} from "typeorm"
import { Mujer } from "./Mujer"

@Entity()
export class Esposo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @Column()
    apellido:string

    @Column()
    edad:number

    @OneToOne(() => Mujer, mujer => mujer.esposo) // specify inverse side as a second parameter
    @JoinColumn()
    mujer: Mujer;
    
}