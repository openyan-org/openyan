import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6"
import { MdLogout } from "react-icons/md";
import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { invokeSignOut } from "@/lib/actions";

export default function ProfileMenuItems({ username }: { username: string }) {
  return (
    <DropdownMenuContent className="w-auto rounded-xl">
      <DropdownMenuLabel>{username}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <div>
        <div className="hover:bg-zinc-900 hover:cursor-pointer rounded-xl p-2 text-sm flex items-center">
          <FaUser className="mr-2" /> Profile
        </div>
        <div className="hover:bg-zinc-900 hover:cursor-pointer rounded-xl p-2 text-sm flex items-center">
          <FaGear className="mr-2" /> Settings
        </div>
        <div onClick={async () => {
          await invokeSignOut();
        }} className="hover:bg-zinc-900 hover:cursor-pointer rounded-xl text-red-400 p-2 text-sm flex items-center">
          <MdLogout className="mr-2" /> Sign Out
        </div>
      </div>
    </DropdownMenuContent>
  )
}