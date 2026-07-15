import { implement } from "@orpc/server";
import { contract } from "@repo/router-contract";

const implementer = implement(contract);

export const router = implementer.router({
	greet: implementer.greet.handler(({ input }) => {
		return {
			text: `Hello ${input.name}!`,
		};
	}),
});
