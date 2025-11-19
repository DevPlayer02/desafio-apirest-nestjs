import { Injectable } from '@nestjs/common';
import { ValidateTokenDTO } from '../domain/dto/validate-token.dto';
import { MyJwtPayload } from '../interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VerifyTokenService {
  constructor(private readonly jwtService: JwtService) {}
  async execute(token: string): Promise<ValidateTokenDTO> {
    try {
      token = token.replace(/^Bearer\s+/i, '');

      const decoded = await this.jwtService.verifyAsync<MyJwtPayload>(token, {
        secret: process.env.JWT_SECRET,
        issuer: 'users_api',
        audience: 'users',
      });

      return { valid: true, decoded };
    } catch (error) {
      const err = error as Error;
      return { valid: false, message: err.message };
    }
  }
}
