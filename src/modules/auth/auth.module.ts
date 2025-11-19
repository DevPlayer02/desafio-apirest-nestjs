import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { AuthController } from './infra/auth.controller';
import { AuthLoginService } from './services/login.service';
import { AuthRegisterService } from './services/register.service';
import { AuthForgotPasswordService } from './services/forgot-password.service';
import { MailModule } from '../mail/mail.module';
import { AuthResetPasswordService } from './services/reset-password.service';
import { GenerateTokenService } from './services/generate-token.service';
import { VerifyTokenService } from './services/verify-token.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET') ?? 'changeme',
        signOptions: {
          issuer: 'users_api',
          audience: 'users',
          expiresIn: config.get<string>('JWT_EXPIRES_IN') ?? '1d',
        } as any,
      }),
    }),
    MailModule,
    UsersModule,
    ConfigModule.forRoot(),
  ],
  providers: [
    AuthLoginService,
    AuthRegisterService,
    GenerateTokenService,
    VerifyTokenService,
    JwtStrategy,
    AuthForgotPasswordService,
    AuthResetPasswordService,
  ],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
