import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../utils/tokens';
import type { IUserRepository } from '../domain/repositories/IUser.repository';

@Injectable()
export class DeleteUserService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository
  ) {}

  private async isIdExists(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async execute(id: number) {
    await this.isIdExists(id)

    return await this.userRepository.remove(id);
  }
}
