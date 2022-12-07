import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBossParking1670434598909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'bossParkings',
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
                    name:'user',
                    type:'varchar',
                },
                {
                    name:'password',
                    type:'password',
                },
                {
                    name:'id_parking',
                    type:'varchar',
                },
                {
                    name:'status',
                    type:'boolean',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bossParkings');
    }

}
