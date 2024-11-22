import { externalUrls, urls } from "@/lib/config";
import Link from "next/link";
import { FaAsterisk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex py-6 justify-center">
      Built by&nbsp;
      <Link
        href={externalUrls.abyanMajidGitHub}
        className="hover:text-teal-300"
      >
        Abyan Majid
      </Link>{" "}
      <span className="inline-flex items-center px-2">
        <FaAsterisk className="text-white" size={24} />
      </span>{" "}
      OpenYan &copy; 2024
    </footer>
  )
}