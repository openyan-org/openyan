import { signIn } from "@/lib/auth";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";

interface OAuthLoginButtonProps {
  provider: "github" | "google" | "discord";
}

const providerIcons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  google: <FaGoogle />,
  discord: <FaDiscord />,
};

export default function OAuthLoginButton({ provider }: OAuthLoginButtonProps) {
  const icon = providerIcons[provider];

  if (!icon) {
    throw new Error(`Unsupported provider: ${provider}`);
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button variant="outline" className="w-72 border-2 btn-animate text-md px-14 py-6 rounded rounded-xl">
        {icon}
        <span className="ml-2">Continue with {capitalizeProvider(provider)}</span>
      </Button>
    </form>
  );
}

function capitalizeProvider(provider: string) {
  return provider.charAt(0).toUpperCase() + provider.slice(1);
}
