"use server"

import { signIn, signOut } from "./auth";

export async function invokeSignOut() {
  await signOut();
}

export async function invokeSignIn(provider: string) {
  await signIn(provider);
}