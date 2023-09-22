import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AtributesORM } from './atributes.entity';
import { ItemORM } from './item.entity';

@Entity('User')
export class UserORM {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: number; // composed by 4 digits - the first two is the campain id, the last two is the player id      --code for campain id = 1 and player id = 1  is 0101
    //admin code is 2609

    @Column()
    playerName: string;

    @Column()
    charName: string;

    @Column()
    charLevel: number;

    @Column()
    charRace: string;

    @Column()
    charClass: string;

    @Column()
    charHp: number;

    @Column()
    charSanity: number;

    @Column()
    charHistory: string;

    @Column()
    playerNotes: string;

    @OneToOne(() => AtributesORM, attributes => attributes.user, { cascade: true })
    @JoinColumn()
    attributes: AtributesORM;

    @OneToMany(() => ItemORM, item => item.user, { cascade: true })
    items: ItemORM[];

}
