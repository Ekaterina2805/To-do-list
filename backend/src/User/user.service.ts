import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/Prisma/prisma.service';


export const roundsOfHashing = 10;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(
      data.password,
      roundsOfHashing,
    );

    const password = hashedPassword;
    console.log({
      ...data, password
    })
    return this.prisma.user.create({
      data: {
        ...data, password
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.UserUncheckedUpdateInput) {
    if (data.password) {
      const password = await bcrypt.hash(
        String(data.password),
        roundsOfHashing,
      );
    }

    return this.prisma.user.update({
      where: { id },
      data: data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
