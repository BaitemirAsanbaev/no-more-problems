import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { UsersDTO } from './users.dto';
import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User)
              private userRepo: typeof User) {
  }

  async createUser(dto: UsersDTO) {
    return await this.userRepo.create({ ...dto});
  }
  async getAllUsers() {
    return await this.userRepo.findAll();
  }
  async seedDatabase() {
    const batchSize = 10_000;
    const totalUsers = 1_000_000;
  
    for (let i = 0; i < totalUsers; i += batchSize) {
      const users = Array.from({ length: batchSize }, () => ({
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 99 }),
        has_problems: faker.datatype.boolean(),
      }));
  
      await this.userRepo.bulkCreate(users, { validate: false });
      console.log(`Inserted ${i + batchSize} users`);
    }
    return({message:`Database seeding completed! Created ${totalUsers} users`})

  }
  async resetProblemsFlag(): Promise<number> {
    const count = await User.count({ where: { has_problems: true } });

    const batchSize = 10_000;
    let offset = 0;

    while (true) {
      const users = await User.findAll({
        where: { has_problems: true },
        limit: batchSize,
        offset,
      });

      if (users.length === 0) break;

      await User.update(
        { has_problems: false },
        {
          where: {
            id: {
              [Op.in]: users.map((user) => user.id),
            },
          },
        },
      );

      offset += batchSize;
    }

    return count;
  }
}