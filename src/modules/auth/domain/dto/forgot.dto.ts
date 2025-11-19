import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class ForgotDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
