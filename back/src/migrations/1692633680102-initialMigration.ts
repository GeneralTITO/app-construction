import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692633680102 implements MigrationInterface {
    name = 'InitialMigration1692633680102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "insumos" ("id" SERIAL NOT NULL, "item_name" character varying(250) NOT NULL, "amount" character varying(200) NOT NULL, "description" text, "expiration" date NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_b4e1b727a7b140e698e3a3dc7af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "email" character varying(250) NOT NULL, "password" character varying(250) NOT NULL, "is_constructor" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ofertas" ("id" SERIAL NOT NULL, "valor" character varying(250) NOT NULL, "description" text, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_5ae09ce42a5883ce4500c7d05e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ofertas"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "insumos"`);
    }

}
