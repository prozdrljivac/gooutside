import { UserController } from "./user.controller";
import { UserService } from "./user.service";

describe("UserController", () => {
	let userController: UserController;
	let userService: UserService;

	beforeEach(() => {
		userService = new UserService();
		userController = new UserController(userService);
	});

	describe("detail", () => {
		it("should return a user object", async () => {
			const result = "User info";
			jest.spyOn(userService, "detail").mockImplementation(() => result);

			expect(await userController.detail()).toBe(result);
		});
	});
});
