import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async signIn({ user, account }) {
      return true
    },
    async session({ session, user }) {
      session.user.id = user.id
      return session
    },
  }
})
