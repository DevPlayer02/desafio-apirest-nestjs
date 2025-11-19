import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import type { IUserRepository } from '../domain/repositories/IUser.repository';
import { USER_REPOSITORY_TOKEN } from '../utils/tokens';
import { UpdateUserDTO } from '../domain/dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserService {
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

  private async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async execute(id: number, body: UpdateUserDTO) {
    await this.isIdExists(id);

    const payload: Partial<UpdateUserDTO> = { ...body };
      
    if (payload.password) {
      payload.password = await this.hashPassword(payload.password);
    }

    if (body.password) {
      body.password = await this.hashPassword(body.password);
    }

    try {
      const updated = await this.userRepository.update(id, payload as UpdateUserDTO);

      if (!updated) {
        throw new NotFoundException('User not found after update');
      }

      return updated;
    } catch (err) {
      throw new InternalServerErrorException('Failed to update user');
    }
  }
}
