import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import Image from './Image';

@Entity('parkings')
export default class Parking{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nameParking: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    nameContact: string;

    @Column()
    opening_hours: string;

    @Column()
    countVacancyCar: number;

    @Column()
    countVacancyMoto: number;

    @Column()
    costCarMonth: number;

    @Column()
    costCarDay: number;

    @Column()
    costCarHour: number;

    @Column()
    costMotoMonth: number;

    @Column()
    costMotoDay: number;

    @Column()
    costMotoHour: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    otherService: string;
}