// user.orm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserORM } from '../../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserORM)
        private readonly userORMRepository: Repository<UserORM>,
    ) {}

    async findAll(): Promise<UserORM[]> {
        return await this.userORMRepository.find();
    }

    async findOne(id: number): Promise<UserORM> {
        return await this.userORMRepository.findOne({where: {id}});
    }

    async create(user: UserORM): Promise<UserORM> {
        return await this.userORMRepository.save(user);
    }

    async update(id: number, updatedUser: Partial<UserORM>): Promise<void> {
        await this.userORMRepository.update(id, updatedUser);
    }

    async delete(id: number): Promise<void> {
        await this.userORMRepository.delete(id);
    }
}
