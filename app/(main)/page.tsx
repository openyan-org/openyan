"use client"

import { Button } from '@/components/ui/button';
import { useClerk } from '@clerk/nextjs'

export default function Home() {
  const { signOut } = useClerk()
  return (
    <div>
          <Button onClick={() => signOut({ redirectUrl: '/sign-up' })}>Sign out</Button>
    </div>
  );
}
