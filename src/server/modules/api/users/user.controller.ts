import { Controller, Get, Post, Res, Req, Body, Param, HttpCode, HttpStatus, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserServiceComponent } from './user.service-component';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {

  constructor(private readonly userServiceComponent: UserServiceComponent) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userServiceComponent.create(createUserDto);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return this.userServiceComponent.deleteOne(params.id);
  }

  @Post('update/:id')
  async upDateOne(@Param() params, @Body() body) {
    return this.userServiceComponent.upDateOne(params.id, body);
  }

  @Get('users')
  async findAll(): Promise<User[]> {
    return this.userServiceComponent.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User[]> {
    return this.userServiceComponent.findOne(params.id);
  }
}
