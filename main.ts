import "dotenv";

import fast from "https://deno.land/x/fast@6.0.0-alpha.1/mod.ts";
import * as Routes from "./routes/mod.ts";
import { HTTPMethod } from "./util/enums.ts";

const app = fast();

for (const route of Object.values(Routes)) {
  switch (route.method) {
    case HTTPMethod.GET: {
      app.get(route.route, route.handler);
    }
  }
}

app.serve({ port: 9994 });
