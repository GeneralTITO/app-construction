import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Input } from "./Pregao_insumos.entity";
import { User } from "./user.entity";

@Entity("ofertas")
export class Offer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  valor: string;

  @Column({ type: "text", nullable: true })
  description: string | null | undefined;

  @Column({
    type: "enum",
    enum: ["awaiting", "accepted", "rejected"],
    default: "awaiting",
  })
  status: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => Input, (input) => input.offers)
  input: Input;

  @ManyToOne(() => User, (user) => user.offers)
  user: User;
}
