import Link from "next/link";
import { Separator } from "../ui/separator";
import Badge from "../common/badge";

const productUrls = {
  "LazyAPI": "/lazyapi",
};

const newProducts = ["LazyAPI"];

const otherUrls = {
  "Support": "/support",
  "Release Notes": "/releases",
  "Terms of Service": "/terms"
};

export default function NavItems() {
  return (
    <nav className="mt-6 flex flex-col">
      <div className="ml-2">
        <h2 className="font-extrabold text-xl text-teal-300">Products</h2>
        <Separator className="my-2" />
      </div>
      {Object.entries(productUrls).map(([item, url]) => (
        <Link
          key={item}
          href={url}
          className="py-2 pl-2 rounded rounded-xl hover:text-zinc-300 text-lg font-medium flex justify-between items-center"
        >
          <span className="flex items-center">{item}
            {newProducts.includes(item) && (
              <Badge text="New" />
            )}
          </span>

        </Link>
      ))}
      <div className="ml-2 mt-8">
        <h2 className="font-extrabold text-xl text-teal-300">Other</h2>
        <Separator className="my-2" />
      </div>
      {Object.entries(otherUrls).map(([item, url]) => (
        <Link
          key={item}
          href={url}
          className="py-2 pl-2 rounded rounded-xl hover:text-zinc-300 text-lg font-medium flex justify-between items-center"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
