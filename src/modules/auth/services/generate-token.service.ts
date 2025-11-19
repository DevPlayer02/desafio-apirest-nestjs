import { User } from "src/modules/users/entities/user.entity";
import { MyJwtPayload } from "../interfaces/jwt-payload.interface";
import { JwtService, JwtSignOptions } from "@nestjs/jwt";
import { ConfigService } from '@nestjs/config';
import { Injectable } from "@nestjs/common";


@Injectable()
export class GenerateTokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) { }
  
  async execute(user: User) {
    const payload: MyJwtPayload = { sub: user.id, name: user.name };

    const options: JwtSignOptions = {
      expiresIn: this.config.get<string>('JWT_EXPIRES_IN') ?? '1d',
      issuer: 'users_api',
      audience: 'users',
    } as any;

    return { access_token: await this.jwtService.signAsync(payload, options) };
  }
}