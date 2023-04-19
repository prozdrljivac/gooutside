import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async signup(user) {
		const newUser = await this.prisma.user.create({
			data: user,
		});
		return newUser;
	}
}
