import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(6)
  @Transform(({ value }) => String(value))
  @IsNotEmpty()
  password!: string;
}
