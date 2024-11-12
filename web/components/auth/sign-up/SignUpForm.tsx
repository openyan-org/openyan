"use client"

import * as SignUp from '@clerk/elements/sign-up'
import * as Clerk from '@clerk/elements/common'
import SignUpHeader from './SignUpHeader'
import CredentialInputField from './CredentialInputField'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import OAuthOption from './OAuthOption'

export default function SignUpForm() {
  return (
    <SignUp.Root>
      <Clerk.Loading>
        {(isGlobalLoading) => (
          <>
            <SignUp.Step name="start">
              <div className="w-full max-w-lg mt-8">
                <SignUpHeader />
                <div className="grid gap-y-4 p-4">
                  <div className="grid gap-x-4">
                    <OAuthOption provider="google" isLoading={isGlobalLoading} />
                  </div>
                  <p className="flex items-center gap-x-3 text-md text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                    or
                  </p>
                  <CredentialInputField label="Email address" type="email" name="emailAddress" isRequired />
                  <CredentialInputField label="Password" type="password" name="password" isRequired />
                </div>
                <div className="flex flex-col space-y-4 p-4 pt-0">
                  <SignUp.Captcha className="empty:hidden" />
                  <SignUp.Action submit asChild>
                    <Button className="w-full py-6 btn-animate" disabled={isGlobalLoading}>
                      <Clerk.Loading>
                        {(isLoading) => {
                          return isLoading ? (
                            <Icons.spinner className="size-4 animate-spin" />
                          ) : (
                            <span className="text-lg">Continue with Email</span>
                          )
                        }}
                      </Clerk.Loading>
                    </Button>
                  </SignUp.Action>
                  <Button variant="link" size="sm" asChild className="mx-auto text-sm">
                    <Clerk.Link navigate="sign-in">Already have an account? Sign in</Clerk.Link>
                  </Button>
                </div>
              </div>
            </SignUp.Step>
          </>
        )}
      </Clerk.Loading>
    </SignUp.Root>
  )
}