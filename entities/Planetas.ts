import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"
import {Favoritos} from "./Favoritos"

@Entity()
export class Planetas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    Name: string

    @Column()
    Climate: string

    @Column()
    Population: number

    @Column()
    OrbitalPeriod: number

    @Column()
    RotationPeriod: number

    @Column()
    Diameter: number

    @ManyToOne(() => Favoritos, favoritos => favoritos.personajes)
    favoritos: Favoritos;
}