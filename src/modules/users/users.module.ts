import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './infra/users.repository';
import { CreateUserService } from './services/create-user.service';
import { UserController } from './infra/users.controller';
import { USER_REPOSITORY_TOKEN } from './utils/tokens';
import { FindByEmailService } from './services/find-by-email.service';
import { FindAllUsersService } from './services/find-all-users.service';
import { FindByUsernameService } from './services/find-username.service';
import { FindByIdService } from './services/find-by-id.service';
import { UpdateUserService } from './services/update-user.service';
import { DeleteUserService } from './services/delete-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    CreateUserService,
    FindByEmailService,
    FindByUsernameService,
    FindByIdService,
    UpdateUserService,
    DeleteUserService,
    FindAllUsersService,
    { provide: USER_REPOSITORY_TOKEN, useClass: UserRepository },
  ],
  controllers: [UserController],
  exports: [FindByEmailService, FindByIdService, FindByUsernameService, CreateUserService, UpdateUserService ],
})
export class UsersModule {}
