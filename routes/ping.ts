import { Context } from "https://deno.land/x/fast@6.0.0-alpha.1/mod.ts";
import { HTTPMethod } from "../util/enums.ts";

export const PingRoute = {
  method: HTTPMethod.GET,
  route: "/ping",
  handler: (_ctx: Context) => {
    return new Response("PONG");
  },
};
