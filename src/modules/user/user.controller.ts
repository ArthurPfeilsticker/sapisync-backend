// user.orm.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserORM } from '../../entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userORMService: UserService) {}

    @Get()
    async findAll(): Promise<UserORM[]> {
        return this.userORMService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<UserORM> {
        return this.userORMService.findOne(id);
    }

    @Post()
    async create(@Body() user: UserORM): Promise<UserORM> {
        return this.userORMService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatedUser: Partial<UserORM>): Promise<void> {
        return this.userORMService.update(id, updatedUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.userORMService.delete(id);
    }
}
