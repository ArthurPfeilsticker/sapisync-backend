import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserORM {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    charName: string;

    @Column()
    code: number; // composed by 4 digits - the first two is the campain id, the last two is the player id      --code for campain id = 1 and player id = 1  is 0101
    //admin code is 2609
}
