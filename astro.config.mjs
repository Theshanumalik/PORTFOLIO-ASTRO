import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercelServerless from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  integrations: [tailwind(), icon(), mdx(), react()],
});
