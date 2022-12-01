import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createParkings1602733659385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'parkings',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:'nameParking',
                    type:'varchar',
                },
                {
                    name:'email',
                    type:'varchar',
                },
                {
                    name:'phone',
                    type:'varchar',
                },
                {
                    name:'nameContact',
                    type:'varchar',
                },
                {
                    name:'opening_hours',
                    type:'varchar',
                },
                {
                    name:'countVacancyCar',
                    type:'integer',
                },
                {
                    name:'countVacancyMoto',
                    type:'integer',
                },
                {
                    name:'costCarMonth',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                {
                    name:'costCarDay',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                {
                    name:'costCarHour',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                {
                    name:'costMotoMonth',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                {
                    name:'costMotoDay',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                {
                    name:'costMotoHour',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                
                {
                    name:'latitude',
                    type:'decimal',
                    scale:10,
                    precision:2,
                },
                {
                    name:'longitude',
                    type:'decimal',
                    scale:10,
                    precision:2,
                },
                {
                    name:'otherService',
                    type:'text',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('parkings');
    }

}
