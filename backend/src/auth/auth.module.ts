import { JwtModule } from "@nestjs/jwt/dist";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtGuard } from "./guard";
import { JwtStrategy } from "./strategy";

@Module({
	imports: [
		PassportModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: {
				expiresIn: "1h",
			},
		}),
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		JwtStrategy,
		// Sets JWT as GLOBAL Guard
		{
			provide: "APP_GUARD",
			useClass: JwtGuard,
		},
	],
})
export class AuthModule {}
