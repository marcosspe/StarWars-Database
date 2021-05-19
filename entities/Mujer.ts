import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany} from "typeorm"

import {Esposo} from "./Esposo"
import {Hijo} from "./Hijo"

@Entity()
export class Mujer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido:string

    @Column()
    edad:number

    @OneToOne(() => Esposo, esposo => esposo.mujer) // specify inverse side as a second parameter
    esposo: Esposo;

    @OneToMany(() => Hijo, hijo => hijo.mujer)
    hijos: Hijo[];
}