import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStatusAtEntities1693102366808 implements MigrationInterface {
    name = 'AddStatusAtEntities1693102366808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."ofertas_status_enum" AS ENUM('awaiting', 'accepted', 'rejected')`);
        await queryRunner.query(`ALTER TABLE "ofertas" ADD "status" "public"."ofertas_status_enum" NOT NULL DEFAULT 'awaiting'`);
        await queryRunner.query(`CREATE TYPE "public"."insumos_status_enum" AS ENUM('created', 'in_progress', 'accomplished')`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "status" "public"."insumos_status_enum" NOT NULL DEFAULT 'created'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."insumos_status_enum"`);
        await queryRunner.query(`ALTER TABLE "ofertas" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."ofertas_status_enum"`);
    }

}
