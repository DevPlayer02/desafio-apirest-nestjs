import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthResetPasswordDTO } from '../domain/dto/reset.dto';
import { UpdateUserService } from 'src/modules/users/services/update-user.service';
import { VerifyTokenService } from './verify-token.service';
import { GenerateTokenService } from './generate-token.service';

@Injectable()
export class AuthResetPasswordService {
  constructor(
    private readonly verifyTokenService: VerifyTokenService,
    private readonly generateTokenService: GenerateTokenService,
    private readonly updateUserService: UpdateUserService
  ) {}

  async execute({ token, password }: AuthResetPasswordDTO) {
    const { valid, decoded } = await this.verifyTokenService.execute(token);

    if (!valid || typeof decoded === 'undefined') {
      throw new UnauthorizedException('Invalid token');
    }

    const id = Number();

    const updatedUser = await this.updateUserService.execute(id, { password });

    return await this.generateTokenService.execute(updatedUser);
  }
}
