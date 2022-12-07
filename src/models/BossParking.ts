import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import Image from './Image';

@Entity('bossParkings')
export default class Parking{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    user: string;

    @Column()
    password: string;

    @Column()
    id_parking: number;

    @Column()
    status: boolean;
}