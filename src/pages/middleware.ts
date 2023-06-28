export { default } from "next-auth/middleware";

export const config = { matcher: ["/forum/:path*", "/settings"] };
