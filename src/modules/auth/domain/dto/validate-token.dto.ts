import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { MyJwtPayload } from '../../interfaces/jwt-payload.interface';

export class ValidateTokenDTO {
  @IsBoolean()
  @IsNotEmpty()
  valid: boolean;

  decoded?: MyJwtPayload;

  @IsString()
  @IsOptional()
  message?: string;
}
