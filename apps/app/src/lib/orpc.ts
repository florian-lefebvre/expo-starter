import { createORPCClient } from "@orpc/client";
import type { RouterContractClient } from "@orpc/contract";
import { OpenAPILink } from "@orpc/openapi/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { contract } from "@repo/router-contract";

const link = new OpenAPILink(contract, {
	origin: process.env.EXPO_PUBLIC_API_URL,
});

export const client: RouterContractClient<typeof contract> =
	createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);
