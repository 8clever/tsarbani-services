import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class Property {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column("int")
  maxGuestsCount: number;

  @Column("int")
  pricePerHour: number;

  @Column("int")
  minHours: number;

  @Column("int")
  maxHours: number;
}