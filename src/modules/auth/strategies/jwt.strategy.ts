import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { MyJwtPayload } from '../interfaces/jwt-payload.interface';
import { FindByIdService } from 'src/modules/users/services/find-by-id.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly findByIdService: FindByIdService,
    private readonly config: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET') ?? 'changeme',
      issuer: 'users_api',
      audience: 'users',
    });
  }
  async validate(payload: MyJwtPayload) {
    if (!payload?.sub) {
      throw new UnauthorizedException('Invalid token payload');
    }

    const id = Number(payload.sub);
    const user = await this.findByIdService.execute(id);

    if (!user) {
      throw new UnauthorizedException('User not found or invalid token');
    }

    return user;
  }
}
