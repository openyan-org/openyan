"use client"

import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import ProfileMenuItems from "./profile-menu-items";

export default function ProfileMenu({ avatarImgSrc, username }: { avatarImgSrc: string, username: string }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={avatarImgSrc} alt={username}></AvatarImage>
            <AvatarFallback className="bg-zinc-900 border border-zinc-700"><FaUser /></AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <ProfileMenuItems username={username} />
      </DropdownMenu>
    </>
  )
}