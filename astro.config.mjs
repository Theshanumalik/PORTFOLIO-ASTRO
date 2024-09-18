import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), icon(), mdx(), react()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
