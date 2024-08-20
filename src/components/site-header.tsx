"use client";


import { useState, useEffect } from "react";
import MobileNav from "./mobile-nav";
import MainNav from "./main-nav";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Icons } from "./icons";
import Link from "next/link";

import { Session } from "next-auth";
import { useSigninModal } from "@/hooks/use-signin-modal";
import UserDropdown from "./user-dropdown";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Demo", href: "#" },
  { name: "Docs", href: "#" },
];

export function SiteHeader({ session }: { session: Session | null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const signInModal = useSigninModal();
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 p-6 lg:px-8 lg:backdrop-blur-sm">
          {/* icon logo */}
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <Icons.logo
                classNameText="hidden sm:block"
                iconProps={{
                  className: "w-6 h-6 sm:w-5 sm:h-5 fill-foreground",
                }}
              />
            </Link>
          </div>

          {/* haburger */}
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* nav */}
          <MainNav navigation={navigation} />

          {/* session button */}
          <div className="hidden lg:flex flex-1 ">
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button onClick={signInModal.onOpen} className="hidden cursor-pointer text-sm font-semibold leading-6 lg:flex lg:flex-1 lg:justify-end">
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
            )}
          </div>
        </div>
        <MobileNav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />
      </header>
    </>
  );
}
