import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Ensure the environment variables are defined
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing Google OAuth environment variables");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
