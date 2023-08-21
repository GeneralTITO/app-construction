import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("insumos")
export class Input {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  item_name: string;

  @Column({ length: 200 })
  amount: string;

  @Column({ type: "text", nullable: true })
  description: string | null | undefined;

  @Column({ type: "date" })
  expiration: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;
}
