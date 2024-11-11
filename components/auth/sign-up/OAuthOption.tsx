"use client"

import * as Clerk from '@clerk/elements/common'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { OAuthProvider } from '@clerk/types'

export default function OAuthOption({ provider, isLoading }: {provider: OAuthProvider, isLoading: boolean}) {
  return (
    <Clerk.Connection name={provider} asChild>
      <Button
        className="text-lg py-6 btn-animate"
        size="lg"
        variant="secondary"
        type="button"
        disabled={isLoading}
      >
        <Clerk.Loading scope={`provider:${provider}`}>
          {(isLoading) =>
            isLoading ? (
              <Icons.spinner className="size-4 animate-spin" />
            ) : (
              <>
                <Icons.google className="mr-2 size-4" />
                Continue with Google
              </>
            )
          }
        </Clerk.Loading>
      </Button>
    </Clerk.Connection>
  )
}