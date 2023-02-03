import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "userName", type: "varchar" })
  userName: String

  @Column({ name: "password", type: "varchar" })
  password: String
}
