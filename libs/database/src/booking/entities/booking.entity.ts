import { Property } from '@db/database/property/entities/property.entity';
import { Column, Entity, ObjectID, ObjectIdColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Booking {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  fio: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column("date")
  dateFrom: Date;

  @Column("date")
  dateTo: Date;

  @Column("int")
  guestsCount: number;

  @OneToOne(type => Property)
  @JoinColumn()
  property: Property
}
