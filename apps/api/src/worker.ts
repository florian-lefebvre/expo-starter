import { orpcHandler } from "./oprc";

export default {
	async fetch(request, env) {
		const handlerResult = await orpcHandler.handle(request, {
			context: env,
		});
		if (handlerResult.matched) {
			return handlerResult.response;
		}
		return new Response("Not Found", { status: 404 });
	},
} satisfies ExportedHandler<Env>;
