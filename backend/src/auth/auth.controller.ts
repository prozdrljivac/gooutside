import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { Public } from "./decorator";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@Post("signup")
	signup(@Body() dto: AuthDto) {
		return this.authService.signup(dto);
	}

	@Public()
	@Post("signin")
	signin(@Body() dto: AuthDto) {
		return this.authService.signin(dto);
	}
}
