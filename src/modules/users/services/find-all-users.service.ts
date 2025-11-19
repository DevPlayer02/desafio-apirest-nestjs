import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../utils/tokens';
import type { IUserRepository } from '../domain/repositories/IUser.repository';

Injectable();
export class FindAllUsersService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository
  ) {}

  async execute() {
    const users = await this.userRepository.list();

    return users;
  }
}
