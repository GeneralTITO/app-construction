import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";
import { Input } from "./Pregao_insumos.entity";
import { Offer } from "./pregao_ofertas.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ unique: true, length: 250 })
  email: string;

  @Column({ length: 250 })
  password: string;

  @Column({ default: false })
  is_constructor: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToMany(() => Input, (input) => input.user)
  inputs: Input[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}
