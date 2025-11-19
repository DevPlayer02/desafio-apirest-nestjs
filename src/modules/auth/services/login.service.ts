import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from '../domain/dto/login.dto';
import { FindByUsernameService } from 'src/modules/users/services/find-username.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthLoginService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly findByUsernameService: FindByUsernameService
  ) {}

  async execute({ username, password }: LoginDTO) {
    const user = await this.findByUsernameService.execute(username);

    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException('Username or password is incorrect');

    const payload = { sub: user.id, name: user.name };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
}
