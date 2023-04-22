import * as argon from "argon2";
import { ForbiddenException, Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	constructor(private jwt: JwtService, private prisma: PrismaService) {}

	async signup(dto: AuthDto) {
		const hash = await argon.hash(dto.password);
		try {
			const newUser = await this.prisma.user.create({
				data: {
					email: dto.email,
					password: hash,
				},
			});
			return newUser;
		} catch (error) {
			if (error.code === "P2002") {
				throw new ForbiddenException("Credentials taken");
			}
			throw error;
		}
	}

	async signin(dto: AuthDto) {
		const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
		if (!user) {
			throw new ForbiddenException("User with this email does not exist");
		}

		const is_user_authenticated = await argon.verify(user.password, dto.password);
		if (!is_user_authenticated) {
			throw new ForbiddenException("Wrong password");
		}

		return { access_token: this.jwt.sign({ sub: user.id, email: user.email }) };
	}
}
