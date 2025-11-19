import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../utils/tokens';
import type { IUserRepository } from '../domain/repositories/IUser.repository';

@Injectable()
export class FindByIdService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(id: number) {
    if (!id) {
      return null;
    }

    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new BadRequestException('Email is incorrect');
    }

    return user;
  }
}
