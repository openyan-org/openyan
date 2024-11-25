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
      console.log("user", user)
      console.log("acc", account)
      return true
    }
  }
})
