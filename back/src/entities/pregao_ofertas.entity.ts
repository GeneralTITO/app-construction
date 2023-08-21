import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("ofertas")
export class Offer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  valor: string;

  @Column({ type: "text", nullable: true })
  description: string | null | undefined;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;
}
