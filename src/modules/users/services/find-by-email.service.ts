import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../utils/tokens';
import type { IUserRepository } from '../domain/repositories/IUser.repository';

@Injectable()
export class FindByEmailService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(email: string) {
    if (!email) {
      return null;
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Email is incorrect');
    }

    return user;
  }
}
