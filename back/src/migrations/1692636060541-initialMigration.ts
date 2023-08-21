import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692636060541 implements MigrationInterface {
    name = 'InitialMigration1692636060541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ofertas" ADD "inputId" integer`);
        await queryRunner.query(`ALTER TABLE "ofertas" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "ofertas" ADD CONSTRAINT "FK_2a8870aa5ec696b8a7aa02158b4" FOREIGN KEY ("inputId") REFERENCES "insumos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ofertas" ADD CONSTRAINT "FK_de3ed8d2c7e0ed96d805fb2394a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD CONSTRAINT "FK_45e55feed0d19ab9b1645d4cad1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "insumos" DROP CONSTRAINT "FK_45e55feed0d19ab9b1645d4cad1"`);
        await queryRunner.query(`ALTER TABLE "ofertas" DROP CONSTRAINT "FK_de3ed8d2c7e0ed96d805fb2394a"`);
        await queryRunner.query(`ALTER TABLE "ofertas" DROP CONSTRAINT "FK_2a8870aa5ec696b8a7aa02158b4"`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "ofertas" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "ofertas" DROP COLUMN "inputId"`);
    }

}
