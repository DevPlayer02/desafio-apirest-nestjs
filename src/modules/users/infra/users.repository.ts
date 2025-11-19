import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDTO } from '../domain/dto/create-user.dto';
import { IUserRepository } from '../domain/repositories/IUser.repository';
import { UpdateUserDTO } from '../domain/dto/update-user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntity: Repository<User>
  ) {}

  create(data: CreateUserDTO): Promise<User> {
    const user = this.userEntity.create(data);
    const saved = this.userEntity.save(user);
    delete (saved as any).password;
    return saved;
  }

  findByEmail(email: string): Promise<User | null> {
    const user = this.userEntity.findOneBy({ email });

    return user;
  }

  findByUsername(username: string): Promise<User | null> {
    const user = this.userEntity.findOne({ where: { username } });

    return user;
  }

  findById(id: number): Promise<User | null> {
    const user = this.userEntity.findOne({ where: { id } });

    return user;
  }

  list(): Promise<User[]> {
    const users = this.userEntity.find({
      select: ['id', 'name', 'username', 'email', 'created_at', 'updated_at'],
      order: { created_at: 'DESC' },
    });

    return users;
  }

  async update(id: number, data: UpdateUserDTO): Promise<User | null> {
    const user = await this.userEntity.findOne({ where: { id } });

    if (!user) return null;

    const updatedUser = this.userEntity.merge(user, data);

    const savedUser = await this.userEntity.save(updatedUser);

    return savedUser;
  }

  async remove(id: number): Promise<User | null> {
    const user = await this.userEntity.findOne({ where: { id } });
    if (!user) return null;

    return this.userEntity.remove(user);
  }
}
