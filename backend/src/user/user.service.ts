import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
	detail() {
		return "User info";
	}
}
