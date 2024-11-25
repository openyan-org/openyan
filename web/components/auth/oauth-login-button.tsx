"use client"

import { Button } from "../ui/button";
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { invokeSignIn } from "@/lib/actions";

interface OAuthLoginButtonProps {
  provider: "github" | "google";
}

const providerIcons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  google: <FaGoogle />,
};

export default function OAuthLoginButton({ provider }: OAuthLoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const icon = providerIcons[provider];

  if (!icon) {
    throw new Error(`Unsupported provider: ${provider}`);
  }

  return (
    <form
      action={async () => {
        setIsLoading(true);
        try {
          await invokeSignIn(provider);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <Button
        variant="outline"
        className="w-72 border-2 btn-animate text-md px-14 py-6 rounded rounded-xl flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <FaSpinner className="animate-spin mr-2" />
        ) : (
          <>
            {icon}
            <span className="ml-2">Continue with {capitalizeProvider(provider)}</span>
          </>
        )}
      </Button>
    </form>
  );
}

function capitalizeProvider(provider: string) {
  return provider.charAt(0).toUpperCase() + provider.slice(1);
}
