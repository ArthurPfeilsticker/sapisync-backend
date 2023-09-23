import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AtributesORM } from './atributes.entity';
import { ItemORM } from './item.entity';

@Entity('User')
export class UserORM {
    @PrimaryGeneratedColumn()
    id: number;

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
    currentCharHp: number;

    @Column()
    maxCharHp: number;

    @Column()
    currentCharSanity: number;

    @Column()
    maxCharSanity: number;

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
