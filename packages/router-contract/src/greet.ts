import z from "zod";
import { base } from "./utils";

export const GreetInputSchema = z.strictObject({
	name: z.string(),
});

export const GreetOutputSchema = z.strictObject({
	text: z.string(),
});

export const greet = base
	.route({
		method: "POST",
		path: "/greet",
	})
	.input(GreetInputSchema)
	.output(GreetOutputSchema);
