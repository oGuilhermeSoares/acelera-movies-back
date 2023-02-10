import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "gender", type: "varchar" })
  gender: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: String

  @Column({ name: "image", type: "varchar" })
  image: String

  @Column({ name: "releaseDate", type: "varchar" })
  releaseDate: String

  @Column({ name: "director", type: "varchar" })
  director: String

  @Column({ name: "writer", type: "varchar" })
  writer: String

  @Column({ name: "studio", type: "varchar" })
  studio: String

  @Column({ name: "actor", type: "varchar" })
  actor: String

  @Column({ name: "resume", type: "varchar" })
  resume: String

  @Column({ name: "awards", type: "varchar" })
  awards: String

  @Column({ name: "note", type: "int" })
  note: Number
}
