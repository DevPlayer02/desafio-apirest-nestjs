import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Resend } from 'resend';

type SendMailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
};

@Injectable()
export class ResendMailService {
  private readonly resend: Resend;
  private readonly defaultFrom: string;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not set in environment');
    }

    this.resend = new Resend(apiKey);
  }

  async sendMail(opts: SendMailOptions) {
    try {
      await this.resend.emails.send({
        from: opts.from ?? 'Acme <onboarding@resend.dev>',
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to send email via Resend');
    }
  }
}