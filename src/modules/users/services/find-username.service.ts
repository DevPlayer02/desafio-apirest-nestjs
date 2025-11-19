import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../utils/tokens';
import type { IUserRepository } from '../domain/repositories/IUser.repository';

@Injectable()
export class FindByUsernameService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(username: string) {
    const user = await this.userRepository.findByUsername(username);

    return user;
  }
}
