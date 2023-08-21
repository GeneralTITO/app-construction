import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Offer } from "./pregao_ofertas.entity";

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

  @ManyToOne(() => User, (user) => user.inputs)
  user: User;

  @OneToMany(() => Offer, offer => offer.input)
  offers: Offer[];
}
