import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserORM } from './user.entity';

@Entity('Atributes')
export class AtributesORM {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    acrobatics: number;

    @Column()
    training: number;

    @Column()
    arts: number;

    @Column()
    athletics: number;

    @Column()
    currentEvents: number;

    @Column()
    sciences: number;

    @Column()
    constitution: number;

    @Column()
    crime: number;

    @Column()
    diplomacy: number;

    @Column()
    deception: number;

    @Column()
    stealth: number;

    @Column()
    initiative: number;

    @Column()
    intimidation: number;

    @Column()
    intuition: number;

    @Column()
    investigation: number;

    @Column()
    fight: number;

    @Column()
    medicine: number;

    @Column()
    perception: number;

    @Column()
    piloting: number;

    @Column()
    aim: number;

    @Column()
    profession: number;

    @Column()
    reflexes: number;

    @Column()
    religion: number;

    @Column()
    wisdom: number;

    @Column()
    survival: number;

    @Column()
    tactics: number;

    @Column()
    technology: number;

    @Column()
    will: number;

    @OneToOne(() => UserORM, user => user.attributes)
    user: UserORM;
}
