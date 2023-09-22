import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserORM } from './user.entity';

@Entity('Item')
export class ItemORM {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemName: string;

    @Column()
    itemDamage: string;

    @Column('float')
    itemWeight: number;

    @ManyToOne(() => UserORM, user => user.items)
    user: UserORM;
}
