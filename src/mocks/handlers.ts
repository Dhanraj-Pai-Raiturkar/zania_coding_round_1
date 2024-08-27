import { http, HttpResponse } from "msw";
import Data from "../static/data.json";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("http://localhost:3000/cats", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(Data);
  }),
];
