import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
serve((_req) => new Response("Hello from the server!"), { port: 8000 });