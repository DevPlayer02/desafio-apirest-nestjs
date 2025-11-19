import { Injectable } from '@nestjs/common';
import { RegisterDTO } from '../domain/dto/register.dto';
import { CreateUserDTO } from 'src/modules/users/domain/dto/create-user.dto';
import { CreateUserService } from 'src/modules/users/services/create-user.service';
import { GenerateTokenService } from './generate-token.service';

@Injectable()
export class AuthRegisterService {
  constructor(
    private readonly generateTokenService: GenerateTokenService,
    private readonly createUserService: CreateUserService
  ) {}

  async execute(body: RegisterDTO) {
    const newUser: CreateUserDTO = {
      name: body.name!,
      username: body.username!,
      email: body.email!,
      password: body.password!,
    };

    const user = await this.createUserService.execute(newUser);

    return this.generateTokenService.execute(user);
  }
}
