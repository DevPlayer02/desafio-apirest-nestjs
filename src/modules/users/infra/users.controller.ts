import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import type { CreateUserDTO } from '../domain/dto/create-user.dto';
import { CreateUserService } from '../services/create-user.service';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { FindAllUsersService } from '../services/find-all-users.service';
import { FindByIdService } from '../services/find-by-id.service';
import { UpdateUserDTO } from '../domain/dto/update-user.dto';
import { UpdateUserService } from '../services/update-user.service';
import { DeleteUserService } from '../services/delete-user.service';
import { ParamId } from 'src/shared/decorators/param-id.decorator';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService,
    private readonly findAllUsersService: FindAllUsersService,
    private readonly findByIdService: FindByIdService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  list() {
    return this.findAllUsersService.execute();
  }

  @Get(':id')
  show(@ParamId() id: number) {
    return this.findByIdService.execute(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDTO) {
    return this.createUserService.execute(body);
  }

  @Patch(':id')
  updateUser(@ParamId() id: number, @Body() body: UpdateUserDTO) {
    return this.updateUserService.execute(id, body);
  }

  @Delete(':id')
  deleteUser(@ParamId() id: number) {
    return this.deleteUserService.execute(id);
  }
}
