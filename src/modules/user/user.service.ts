// user.orm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserORM } from '../../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserORM)
        private readonly userRepository: Repository<UserORM>,
    ) {}

    async findAll(): Promise<UserORM[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<UserORM> {
        return await this.userRepository.findOne({where: {id}});
    }

    async findUserWithRelations(id: number): Promise<UserORM> {
        return await this.userRepository.findOne({
            where: {id},
            relations: ['attributes', 'items'],
        })
    }

    async create(user: UserORM): Promise<UserORM> {
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }

    async update(id: number, updatedUser: Partial<UserORM>): Promise<void> {
        await this.userRepository.update(id, updatedUser);
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
