import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"
import {Mujer} from "./Mujer" 

@Entity()
export class Hijo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @Column()
    apellido:string

    @Column()
    edad:number

    @ManyToOne(() => Mujer, mujer => mujer.hijos)
    mujer: Mujer;
}