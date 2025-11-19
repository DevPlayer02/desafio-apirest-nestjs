import { Body, Controller, Patch, Post } from '@nestjs/common';
import { AuthLoginService } from '../services/login.service';
import { AuthRegisterService } from '../services/register.service';
import { LoginDTO } from '../domain/dto/login.dto';
import { RegisterDTO } from '../domain/dto/register.dto';
import { ForgotDto } from '../domain/dto/forgot.dto';
import { AuthForgotPasswordService } from '../services/forgot-password.service';
import { AuthResetPasswordDTO } from '../domain/dto/reset.dto';
import { AuthResetPasswordService } from '../services/reset-password.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authLoginService: AuthLoginService,
    private readonly authRegisterService: AuthRegisterService,
    private readonly authForgotService: AuthForgotPasswordService,
    private readonly authResetPasswordService: AuthResetPasswordService
  ) {}

  @Post('login')
  async login(@Body() body: LoginDTO) {
    return this.authLoginService.execute(body);
  }

  @Post('register')
  async register(@Body() body: RegisterDTO) {
    return this.authRegisterService.execute(body);
  }

  @Post('forgot-password')
  async forgot(@Body() body: ForgotDto) {
    return this.authForgotService.execute(body.email);
  }

  @Patch('reset-password')
  async reset(@Body() { token, password }: AuthResetPasswordDTO) {
    return this.authResetPasswordService.execute({ token, password });
  }
}
