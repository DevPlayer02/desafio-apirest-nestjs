import { User } from '../../entities/user.entity';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UpdateUserDTO } from '../dto/update-user.dto';

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findById(id: number): Promise<User | null>;
  list(): Promise<User[]>;
  update(id: number, data: UpdateUserDTO): Promise<User | null>;
  remove(id: number): Promise<User | null>;
}
