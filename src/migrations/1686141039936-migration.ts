import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1686141039936 implements MigrationInterface {
    name = 'Migration1686141039936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "breed" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "breed"`);
    }

}
