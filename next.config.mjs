/** @type {import('next').NextConfig} */
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

const withPWA = (await import("next-pwa")).default({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
  buildExcludes: [/app-build-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});

/** @type {import("next").NextConfig} */
const config = withPWA({
  reactStrictMode: true,

  images: {
    domains: ["media.discordapp.net"], // TODO
  },

  experimental: {
    esmExternals: false,
    appDir: true,
  },

  output: "standalone",

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
export default config;
