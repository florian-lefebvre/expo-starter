import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { router } from "./router";

export const orpcHandler = new OpenAPIHandler(router);
