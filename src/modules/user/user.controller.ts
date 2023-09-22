// user.orm.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserORM } from '../../entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get()
    async findAll(): Promise<UserORM[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<UserORM> {
        return this.userService.findUserWithRelations(id);
    }

    @Post()
    async create(@Body() user: UserORM): Promise<UserORM> {
        console.log(123);
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatedUser: Partial<UserORM>): Promise<void> {
        return this.userService.update(id, updatedUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id);
    }
}
