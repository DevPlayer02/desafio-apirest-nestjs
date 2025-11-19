import { Injectable, BadRequestException } from '@nestjs/common';
import { templateHTML } from '../utils/template-html';
import { ResendMailService } from 'src/modules/mail/resend-mail.service';
import { FindByEmailService } from 'src/modules/users/services/find-by-email.service';
import { GenerateTokenService } from './generate-token.service';

@Injectable()
export class AuthForgotPasswordService {
  constructor(
    private readonly generateTokenService: GenerateTokenService,
    private readonly findByEmailService: FindByEmailService,
    private readonly mailerService: ResendMailService
  ) {}

  async execute(email: string) {
    const user = await this.findByEmailService.execute(email);

    if (!user) {
      throw new BadRequestException('Email is not found');
    }

    const token = await this.generateTokenService.execute(user);

    await this.mailerService.sendMail({
      from: 'Acme <onboarding@resend.dev>',
      to: user.email,
      subject: 'Password Reset - DNC Users API',
      html: templateHTML(user.name, token.access_token),
    });

    return `A verification code has been sent to ${email}`;
  }
}
