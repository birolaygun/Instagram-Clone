import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "719292777829-gh70lm78pmfnm0qkqp5eot9fo3n9htdd.apps.googleusercontent.com",
      clientSecret: "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"
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
});
