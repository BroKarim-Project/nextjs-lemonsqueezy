"use client";

import * as React from "react";
import { signOut } from "next-auth/react";
import { LayoutDashboard, LogOut } from "lucide-react";
import Image from "next/image";
import { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserDropdown({ session }: { session: Session }) {
  const { email, image } = session?.user || {};
  const [position, setPosition] = React.useState("bottom");

  if (!email) return null;

  return (
    <div className="overflow-auto  justify-end flex  lg:flex-1">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button className="flex h-8 w-8  items-center justify-center overflow-hidden rounded-full border-none  sm:h-9 sm:w-9" variant="outline">
            <Avatar>
              <AvatarImage alt={email} src={image || `https://api.dicebear.com/9.x/micah/svg?randomizeIds=false`} width={40} height={40} />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-56 mr-20">
          <DropdownMenuLabel>
            <div className="p-2">
              {session?.user?.name && <p className="truncate text-sm font-medium text-gray-900">{session?.user?.name}</p>}
              <p className="truncate text-sm text-gray-500">{session?.user?.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LayoutDashboard />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut />
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
        {/* ini trigger */}
      </DropdownMenu>
    </div>
  );
}
