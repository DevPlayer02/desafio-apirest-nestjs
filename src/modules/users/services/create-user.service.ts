import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import type { IUserRepository } from "../domain/repositories/IUser.repository"; 
import { CreateUserDTO } from "../domain/dto/create-user.dto";
import { User } from "../entities/user.entity";
import { USER_REPOSITORY_TOKEN } from "../utils/tokens";
import { hash } from 'bcrypt';

@Injectable()
export class CreateUserService {
    constructor(
        @Inject(USER_REPOSITORY_TOKEN)
        private readonly userRepository: IUserRepository,
    ) { }
    
    async execute(body: CreateUserDTO): Promise<User> { 
        if (!body.username || body.username == undefined) {
            throw new BadRequestException('Username is required')
        }

        if (!body.password || body.password == undefined) {
            throw new BadRequestException('Password is required')
        }

        const passwordString = String(body.password);

        const usernameExists = await this.userRepository.findByEmail(body.username);

        if (usernameExists) {
            throw new BadRequestException('Username already in use');
        }
        
        const hashedPassword = await hash(passwordString, 10);

        const newUser = this.userRepository.create({
            ...body,
            password: hashedPassword,
        });

        return newUser;
    }
}