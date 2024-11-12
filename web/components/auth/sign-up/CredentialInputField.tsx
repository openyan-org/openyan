"use client"

import * as Clerk from '@clerk/elements/common'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CredentialInputField({ label, type, name, isRequired }: {label: string, type: string, name: string, isRequired: boolean}) {
  return (
    <Clerk.Field name={name} className="space-y-2">
      <Clerk.Label asChild>
        <Label className="text-lg">{label}</Label>
      </Clerk.Label>
      <Clerk.Input type={type} required={isRequired} asChild>
        <Input className="border-2 h-12" />
      </Clerk.Input>
      <Clerk.FieldError className="block text-sm text-red-500" />
    </Clerk.Field>
  )
}